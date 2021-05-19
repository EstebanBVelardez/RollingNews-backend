import moongose from 'mongoose';

const url = 'mongodb://localhost:27017/RollingNews';

moongose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = moongose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})