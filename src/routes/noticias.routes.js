import {Router} from 'express';
import noticiasCtrl from '../controllers/noticias.controllers';

const router = Router();

//crear las rutas

router.route('/').get(noticiasCtrl.listaNoticias).post(noticiasCtrl.noticiaNueva);
router.route('/:id').delete(noticiasCtrl.eliminarNoticias)

export default router;