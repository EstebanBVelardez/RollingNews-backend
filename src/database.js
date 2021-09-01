import moongose from 'mongoose';

const url = 'mongodb+srv://rollingcode:rollingnews@cluster0.6ix6m.mongodb.net/test';

moongose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = moongose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})