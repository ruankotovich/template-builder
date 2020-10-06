const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const pluralize = require('pluralize');

const capitalize = (s) => {
  if (typeof s !== 'string') return undefined
    return s.charAt(0).toUpperCase() + s.slice(1)
};

const normalize = (str) => {
  let idx = str.indexOf('.');
  while (idx >= 0) {
    str = `${str.substr(0, idx)}${capitalize(str.slice(idx + 1))}`
    idx = str.indexOf('.');
  }
  return str;
};

const getEnv =
    (env, postProcessorFunction) => {
      const idx = process.argv.indexOf(env);
      if (idx >= 0) {
        const el = process.argv[idx + 1];
        return (postProcessorFunction && postProcessorFunction(el)) || el;
      }

      return undefined;
    }

const substitutions = {}

const extractFields = () => {
  for (const argument of process.argv) {
    const match = argument.match(/--field(-normalized)?:(.+)=(.+)/);
    if (match) {
      const [, isNormalized, field, value] = match;
      const normalizedField = isNormalized? normalize(field) : field;
      const capitalizedField = capitalize(normalizedField);
      const normalizedValue = isNormalized? normalize(value) : value;
      const capitalizedValue = capitalize(normalizedValue);

      substitutions[`<${normalizedField}>`] = normalizedValue;
      substitutions[`<${capitalizedField}>`] = capitalizedValue;
      substitutions[`<plural_${normalizedField}>`] =
          pluralize.plural(normalizedValue);
      substitutions[`<Plural_${normalizedField}>`] =
          pluralize.plural(capitalizedValue);
    }
  }
};


const config = {
  template: getEnv('--template') || 'v1',
  outputFolder: getEnv('--output') || '.'
};

const substituteContent =
    (content, mapper = substitutions) => {
      Object.entries(mapper).forEach(
          ([key, value]) => {
              content = content.replace(new RegExp(key, 'g'), value)})
      return content;
    }

const walkFiles =
    () => {
      const templatePath = path.resolve(`./template/${config.template}`);
      const destinyPath =
          path.resolve(getEnv('--output') || config.outputFolder);
      fs.mkdirSync(destinyPath, {recursive: true});

      const stack = [];

      stack.push(`${templatePath}/<name>`);

      while (stack.length > 0) {
        const current = stack.pop();
        console.log(`Scanning ${current}`)
        const lstat = fs.lstatSync(current);
        if (lstat.isDirectory()) {
          fs.mkdirSync(
              substituteContent(current.replace(templatePath, destinyPath)),
              {recursive: true});
          fs.readdirSync(current).forEach(e => stack.push(`${current}/${e}`))
        } else if (lstat.isFile()) {
          const content = substituteContent(fs.readFileSync(current, 'utf-8'));
          fs.writeFileSync(
              substituteContent(current.replace(templatePath, destinyPath)),
              content);
        }
      }
    }

extractFields();
walkFiles();