// const fs=require('fs');
// const notes=require("./notes.js");
// const os=require('os');
// const port=process.env.PORT || 4000;
// const express = require('express');
// const app=express();
// const db=require("./db");
// const Person=require("./models/person.js");
// const bodyParser=require("body-parser");
// app.use(bodyParser.json());//req.body


// app.get('/',(req,res)=>{
//   res.send("hello world");
// });

// //post route to add a person
// app.post('/person',async(req,res)=>
// {
//   try{
//     const data=req.body;
//     const newPerson=new Person(data);//new person store kelay like new object
//     const response =await newPerson.save();
//     console.log('data saved');
//     // res.status(200).json(response);

//   }
//   catch(err){
//     console.log("error is occured");
//     // res.status(500).json(err,"internal server error");

//   }
  
// });
// app.listen(4000,()=>{
//   console.log("listening on 4000 port");
// })

const fs = require('fs');
const notes = require("./notes.js");
const os = require('os');
const port = process.env.PORT || 4000;
const express = require('express');
const app = express();
const db = require("./db");
const Person = require("./models/person.js");
const Menu = require("./models/menu.js");  // Capitalized Person (model name)
const bodyParser = require("body-parser");
const { useParams } = require('react-router-dom');

app.use(bodyParser.json());  // Parse incoming request bodies in JSON format

// Root route
app.get('/', (req, res) => {
  res.send("Hello world");
});



//import router
const personroute=require("./routes/personRoutes");
app.use('/person', personroute);
const menuroute=require("./routes/menuRoutes.js");
app.use('/menu',menuroute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
