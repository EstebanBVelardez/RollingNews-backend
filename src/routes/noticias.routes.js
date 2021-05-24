import {Router} from 'express';
import noticiasCtrl from '../controllers/noticias.controllers';

const router = Router();

//crear las rutas

router.route('/').get(noticiasCtrl.getPrueba);

export default router;