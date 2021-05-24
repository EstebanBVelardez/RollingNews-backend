import Noticia from '../models/noticias';

const noticiasCtrl = {};

noticiasCtrl.getPrueba = (req,res)=>{
    res.send('hola desde el servidor')
};

export default noticiasCtrl;