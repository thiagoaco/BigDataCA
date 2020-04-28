const express =require('express');
const path= require('path');
const app = express();
const port = 3000;

app.use('/assets',express.static("/css"));
app.use('/ass',express.static("./public"));
app.use('/links',express.static("./views"));
app.use('/jjqq',express.static("./views/jquery"));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/script/index.html'));
} );

app.listen(port,()=>{

    console.log('A funcionol')
})