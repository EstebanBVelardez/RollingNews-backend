import moongose, {Schema} from 'mongoose';

const noticiasSchema = new Schema({
    categoria: {
        type: String,
        requiered: true,
    },
    nombreNoticia:{
        type: String,
        requiered:true
    },
    descripcionNoticia: {
        type: String,
        required: true
    },
    contenidoNoticia:{
        type:String,
        requiered:true
    }
});

const Noticia = moongose.model('noticia', noticiasSchema);

export default Noticia