import { Router } from 'express';
import controller from './<name>.controller';

const router = Router({ mergeParams: true });

router.get('/<plural_name>', controller.findAll);
router.post('/<plural_name>', controller.save);
router.get('/<plural_name>/:id', controller.findById);
router.patch('/<plural_name>/:id', controller.update);
router.delete('/<plural_name>/:id', controller.remove);

export default router;
