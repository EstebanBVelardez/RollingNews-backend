import {Router} from 'express';
import noticiasCtrl from '../controllers/noticias.controllers';

const router = Router();

//crear las rutas

router.route('/').get(noticiasCtrl.listaNoticias).post(noticiasCtrl.noticiaNueva);
router.route('/:id').delete(noticiasCtrl.eliminarNoticias).put(noticiasCtrl.editarNoticias).get(noticiasCtrl.obtenerNoticias);

export default router;