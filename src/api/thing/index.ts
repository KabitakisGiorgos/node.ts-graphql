import { Router } from 'express';
import controller from './thing.controller';

let router = Router();

router.get('/', controller.index);

export default router;