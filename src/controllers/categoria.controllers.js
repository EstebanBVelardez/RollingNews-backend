import Categoria from "../models/categoria";

const categoriaCtrl = {};

categoriaCtrl.prueba = (req, res) => {
  res.send("hola desde el categoria");
};

categoriaCtrl.categoriaNuevo = async (req, res) => {
  try {
    const nuevaCategoria = new Categoria({
      tituloCategoria: req.body.tituloCategoria
    });
    await nuevaCategoria.save();
    res.status(201).json({
      mensaje: "se agrego la nueva categoria"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "ocurrio un error al intentar agregar una categoria"
    })
  }
};

categoriaCtrl.listaCategorias = async (req,res) => {
  try{
const arregloCategorias = await Categoria.find();
res.status(200).json(arregloCategorias);
  }catch (error){
    console.log(error)
    res.status(500).json({
      mensaje: "ocurrio un error al intentar listas las categorias"
    })
  }
}

categoriaCtrl.eliminarCategoria = async(req,res)=>{
try{
console.log(req.params.codigo);
await Categoria.findByIdAndDelete(req.params.codigo);
res.status(200).json({
  mensaje: "La categoria fue eliminada"
})
}catch(error){
  console.log(error)
  res.status(500).json({
    mensaje: "ocurrio un error al intentar eliminar la categoria"
  })
}
}

categoriaCtrl.editarCategoria = async(req,res)=>{
  try{
await Categoria.findByIdAndUpdate(req.params.codigo, req.body);
res.status(200).json({
  mensaje: "La categoria fue modificada"
})
  }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: "No se pudo editar la categoria"
    })
  }
}

categoriaCtrl.obternerCategoria = async(req,res)=>{
  try{
const categoriaBuscada = await Categoria.findById(req.params.codigo);
res.status(200).json(categoriaBuscada)
  }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: "No se pudo obtener la categoria"
    })
  }
}
export default categoriaCtrl;
