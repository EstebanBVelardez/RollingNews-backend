import moongose, {Schema} from 'mongoose';

const noticiasSchema = new Schema({
    autor: {
        type: String,
        requiered: true,
    },
    fecha:{
        type: String,
        requiered:true
    },
    titulo: {
        type: String,
        required: true
    },
    categoria:{
        type:String,
        requiered:true
    },
    resumen:{
        type:String,
        requiered:true
    },
    contenido:{
        type:String,
        requiered:true
    },
    imgGrande:{
        type:String,
        requiered:true
    },
    imgChica:{
        type:String,
        requiered:true
    }
});

const Noticia = moongose.model('noticia', noticiasSchema);

export default Noticia