import moongose, {Schema} from 'mongoose';

const noticiasSchema = new Schema({
    nombreNoticia: {
        type: String,
        requiered: true,
        unique:true
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

const Noticia = moongose.model('noticia', noticiasSchema);

export default Noticia