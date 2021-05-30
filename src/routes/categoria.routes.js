import {Router} from 'express';
import categoriaCtrl from '../controllers/categoria.controllers';

const routerCategoria = Router();

routerCategoria.route('/').get(categoriaCtrl.listaCategorias).post(categoriaCtrl.categoriaNuevo);
routerCategoria.route('/:codigo').delete(categoriaCtrl.eliminarCategoria).put(categoriaCtrl.editarCategoria).get(categoriaCtrl.obternerCategoria);

export default routerCategoria;