const express=require("express");
const router=express.Router();
const Menu=require('./../models/menu.js')
router.post('/',async(req,res)=>{
  try{
    const data=req.body;
    const newMenu=new Menu(data);
    const response=await newMenu.save();
    console.log("menu data saved successfully");
    res.status(200).json(response);


  }
  catch(err)
  {
    // res.status(500).json(response);
    console.log(err);
    console.log("internal server error");
  }

});

router.get('/',async(req,res)=>{
  try{
    const data=await Menu.find();
    console.log('Data saved');
    res.status(200).json(data); 

  }
  catch(err)
  {
    console.log(err);

    console.log("error  occured");
    res.status(500).json(data); 
  }

});
router.get('/:tastetype',async(req,res)=>{
  try{
   const tastetype=req.params.tastetype;
   if(tastetype=='sour'|| tastetype=='sweet'|| tastetype=='spicy')
    
   {
    const response=await Menu.find({taste:tastetype});
    console.log(" menu record fetched");
    res.status(200).json(response);
   }
   else{
    res.status(404).json({error:"invalid menu type"});
   }
  }
  catch(err){
    console.log("no such record found");
  }

});

//update
router.put('/:id',async(req,res)=>{
  try{
    const menuid=req.params.id;
    const updatedmenu=req.body;
    const response=await Menu.
    findByIdAndUpdate(menuid,updatedmenu,{
      new:true,//return the updated document
      runValidators:true,

    });

  }
  catch(err)
  {
    res.status(504).json({error:"internal server error"});
  }
});
router.delete('/:id',async(req,res)=>{
  try{
    const menuid=req.params.id;
    const response=await Menu.findByIdAndDelete(menuid);
    console.log("deleted successfully");

  }
  catch(err)
  {
    res.status(505).json({error:"server error"});
  }
})
module.exports=router;