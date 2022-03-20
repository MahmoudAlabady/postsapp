const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/postsapp'));

app.get('*',(req,res)=>{
    	res.sendFile('index.html',{root:'dist/postsapp/'})
 })
app.listen(process.env.PORT);