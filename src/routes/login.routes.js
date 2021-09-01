import {Router} from 'express';
import loginCtrl from '../controllers/login.controlles';

const routerLogin = Router()

routerLogin.route('/').get(loginCtrl.listaUsuario).post(loginCtrl.usuarioAdmin)


export default routerLogin;