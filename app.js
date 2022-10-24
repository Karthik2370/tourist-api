const express = require('express');
const app = express();
var fs = require('fs'); //require file system object

const port = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send("Works")
})

app.get('/api/:city', function(req, res){

    fs.readFile(__dirname + "/" + req.params.city+".json", 'utf8', function(err, data){
        res.end(data); // you can also use res.send()
    });
})

app.listen(port,()=>{
    console.log("API server has been started on port 4000")
})