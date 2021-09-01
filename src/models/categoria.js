import moongose, {Schema} from 'mongoose';

const categoriaSchema = new Schema ({
    tituloCategoria: {
        type: String,
        requiered: true,
        unique:true,
        maxLength:25
    }
})

const Categoria = moongose.model('categoria', categoriaSchema);

export default Categoria;