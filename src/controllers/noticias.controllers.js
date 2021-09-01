import Noticia from "../models/noticias";

const noticiasCtrl = {};

noticiasCtrl.getPrueba = (req, res) => {
  res.send("hola desde el servidor");
};

noticiasCtrl.noticiaNueva = async (req, res) => {
  //console.log(req.body);
  try {
    console.log(req.body.nombreNoticia);
    //creo un objeto para guardar en la base de datos
    const nuevaNoticia = new Noticia({
        autor: req.body.autor,
        fecha: req.body.fecha,
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        resumen: req.body.resumen,
        contenido: req.body.contenido,
        imgGrande: req.body.imgGrande,
        imgChica: req.body.imgChica
    });
    //guardar el objeto en la BD
    await nuevaNoticia.save();

    //enviar una respuesta al front end

    res.status(201).json({
      mensaje: "noticia agregada :)",
    });
  } catch (error) {
    console.log(error);
    //error al front
    res.status(500).json({
      mensaje: "Ocurrio un error al intentar agregar la noticia",
    });
  }
};

noticiasCtrl.listaNoticias = async (req, res) => {
  try {
    //obtener un arreglo con las noticias
    const arregloNoticias = await Noticia.find();
    //respondemos al front
    res.status(200).json(arregloNoticias);
  } catch (error) {
    console.log(error);
    //error al front
    res.status(500).json({
      mensaje: "Ocurrio un error al intentar listar las noticias",
    });
  }
};

noticiasCtrl.eliminarNoticias = async (req, res) => {
  try {
    console.log(req.params.id);
    await Noticia.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La noticia fue eliminada",
    });
  } catch (error) {
    console.log(error);
    //error al front
    res.status(500).json({
      mensaje: "Ocurrio un error al eliminar la noticia",
    });
  }
};

noticiasCtrl.editarNoticias = async (req, res) => {
  try {
    await Noticia.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La noticia fue editada",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo editar la noticia",
    });
  }
};

noticiasCtrl.obtenerNoticias = async (req, res) => {
  try {
    const noticiaBuscado = await Noticia.findById(req.params.id);
    res.status(200).json(noticiaBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener la noticia",
    });
  }
};

export default noticiasCtrl;
