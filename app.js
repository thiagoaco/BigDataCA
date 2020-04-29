const express =require('express');
const path= require('path');
const app = express();
const port = 3000;

app.use('/css',express.static("./css"));
app.use('/img',express.static("./img"));
app.use('/links',express.static("./script"));
app.use('/jS',express.static("./node_modules/jquery/dist"));




app.get('/')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/script/index.html'));
} );

app.listen(port,()=>{

    console.log('A funciona')
})