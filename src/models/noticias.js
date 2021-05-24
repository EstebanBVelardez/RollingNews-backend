import moongose, {Schema} from 'mongoose';

const noticiasSchema = new Schema({
    nombreNoticia: {
        type: String,
        requiered: true,
    },
    fechaNoticia:{
        type: Number,
        requiered:true
    },
    categoria: {
        type: String,
        required: true
    }
});

const Noticia = moongose.model('producto', noticiasSchema);

export default Noticia