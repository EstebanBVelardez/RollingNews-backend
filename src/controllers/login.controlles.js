
const bcrypt = require('bcryptjs');

const loginCtrl = {};


loginCtrl.listaUsuario = async(req,res)=>{
    try{
const arregloUsuario = await Login.find();
res.status(200).json(arregloUsuario);
    }catch(error){
console.log(error)
    }
}

loginCtrl.usuarioAdmin = async (req, res) => {
   const user = req.body.user
   const pass = req.body.pass
  if(user == 'admin' && pass == '1234'){
     const hashedPassword = await bcrypt.hash(req.body.pass, 10);
    res.json({
      mensaje:'Auntificacion exitosa',
      hashedPassword: hashedPassword
    })
  }else{
    res.json({
      mensaje:'Datos incorrectos'
    })
  }}


export default loginCtrl;