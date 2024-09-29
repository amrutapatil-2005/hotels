// const mongoose=require("mongoose");

// //schema
// const pschema=new mongoose.Schema({
//   name:{
//     type:String,
//     required:true,
//   },
//   age:{
//     type:Number,
//     required:false

//   },work:{
//     type:String,
//     enum:['chef','waiter','manager'],
//     require:true

//   },
//   mobile:{
//     type:String,
//     required:true,
//   },
//   email:{
//     type:String,
//     unique:true,
//     required:true
//   },
//   address:{
//     type:String
//   },
//   salary:{
//     type:Number,
//     required:true
//   }

// });
// //create model like (read,delete,write,update)
// const person=mongoose.model('person',pschema);
// module.exports=person;

const mongoose = require("mongoose");

// Schema
const pschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false
  },
  work: {
    type: String,
    enum: ['chef', 'manager', 'waiter'], // Removed duplicate 'manager'
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String
  },
  salary: {
    type: Number,
    required: true
  }
});

// Create model (CRUD)
const Person = mongoose.model('Person', pschema);

module.exports = Person;
