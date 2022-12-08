const fs = require('fs');
const ejs = require('ejs')
const path = require('path')
// const express = require('./expresstut')

const dirPath = path.join(__dirname,'/crud')
const filePath = `${dirPath}/apple.txt`;
const publicPath = path.join(__dirname,'/public');

const express = require('express');

const app = express();


// const url = require('./url/urls')
//create file
// fs.writeFileSync(filePath,'this is the simple txt file')

//read file

// fs.readFile(filePath,'utf8',(err,file)=>{
//     console.log(file)
// })

//update file


// fs.appendFile(filePath,'this is the updated file',(err)=>{
//   if(!err) console.log('file is updated')
// })

//Rename file name

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)console.log("file is renamed Successfully")
// })

//Deleted file

// fs.unlinkSync(`${dirPath}/apple.txt`)


// let a = 10;
// let b = 0;

// const waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },3000)
// })

// waitingData.then((data)=>{
//     b = data;
//     console.log(a+b)
// })

// waitingData.catch(err=>console.log(err));


// app.use(express.static(publicPath));

// app.set('view engine','ejs')

app.get('/',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/profile',(_,resp)=>{
//     const user = {
//         name:'user name',
//         email:'test@outlook.com'
//     }
//     resp.render('/profile')
// })

//Middleware

const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send('please enter the age')
    }else if(req.query.age<18){
        resp.send('please enter the age greator than 18')
                 
    }else{  
        next()
    }
}

app.use(reqFilter)

app.listen(5000,()=>{
    console.log('example app listing to port : 5000')
})