const express =require('express');
const path= require('path');
const app = express();
const port = 3000;

app.use('/css',express.static("./css"));
app.use('/img',express.static("./img"));
app.use('/links',express.static("./script"));


var name;
var capital;
var population;


function setup(){
    loadJson('https://restcountries.eu/rest/v2/name/brazil',gotData);
     console.log('A funciona')
}

function gotData(data){
    println(data);
    console.log(data)
     console.log('A funciona')
}

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/script/index.html'));
} );

app.listen(port,()=>{

   
})