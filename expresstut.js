const express = require('express');

const app = express();
const port = 5000;

app.get('/',(req,resp)=>{
    // console.log('data from browser = ',req.query)
    resp.send(`
    <h1>Home page</h1>
    <a href='/contact'>go to contact page</a>
    Hello express js`)
});

app.get('/contact',(req,resp)=>{
    resp.send('this is contact page')
})

app.listen(port,()=>{
    console.log('example app listing to port : 5000')
})