import Noticia from '../models/noticias';

const noticiasCtrl = {};

noticiasCtrl.getPrueba = (req,res)=>{
    res.send('hola desde el servidor')
};

noticiasCtrl.noticiaNueva = async(req,res)=>{
    //console.log(req.body);
    try{
console.log(req.body.nombreNoticia)
//creo un objeto para guardar en la base de datos
const nuevaNoticia = new Noticia({
    nombreNoticia: req.body.nombreNoticia,
    fechaNoticia: req.body.fechaNoticia,
    categoria: req.body.categoria
})
//guardar el objeto en la BD
await nuevaNoticia.save();

//enviar una respuesta al front end

res.status(201).json({
    mensaje:"noticia agregada :)"
})

    }catch(error){
        console.log(error)
        //error al front
        res.status(500).json({
            mensaje:"Ocurrio un error al intentar agregar la noticia"
        })
    }
}

export default noticiasCtrl;