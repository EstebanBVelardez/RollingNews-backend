import moongose, {Schema} from 'mongoose';

const categoriaSchema = new Schema ({
    tituloCategoria: {
        type: String,
        requiered: true,
        unique:true
    }
})

const Categoria = moongose.model('categoria', categoriaSchema);

export default Categoria;