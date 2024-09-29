
const mongoose=require("mongoose");
const menuschemaitem=new mongoose .Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  taste:{
    type:String,
    enum:["spicy","sweet","sour"],
    required:true


  },
  is_drink:{
    type:Boolean,
    default:false
  },
  ingredients:{
    type:[String],
    default:[]

  },
  num_sales:{
    type:Number,
    default:0

  }



});
const menuitem=mongoose.model('menuitem',menuschemaitem);
module.exports=menuitem;