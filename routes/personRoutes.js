const express=require("express");
const Person = require("./../models/person.js");
const router=express.Router();
//read
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);  // Use capitalized model name 'Person'
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);  // Send the saved response back to the client
  } catch (err) {
    console.log("Error occurred:", err);
    res.status(500).json({ error: "Internal server error" });  // Send error response
  }
});
router.get('/',async(req,res)=>{
  try{
    const data=await Person.find();
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



router.get('/:worktype',async(req,res)=>{
  try{
   const worktype=req.params.worktype;
   if(worktype=='chef'|| worktype=='manager'|| worktype=='waiter')
   {
    const response=await Person.find({work:worktype});
    console.log("record fetched");
    res.status(200).json(response);
   }
   else{
    res.status(404).json({error:"invalid work type"});
   }
  }
  catch(err){
    console.log("no such record found");
  }

});
//update
router.put('/:id',async(req,res)=>{
  try{
    const personid=req.params.id;//extracts id from url parametr
    const updatedpersondata=req.body;//updated data
    const response=await Person.findByIdAndUpdate(personid,updatedpersondata,{
      new:true,//return the updated document
      runValidators:true,

    });
    if(!response)
    {
      return res.status(404).json({error:'person not found'});
    }
    console.log("data updated");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json("internal server error");

  }

})
//delete 
router.delete('/:id',async(req,res)=>{
  try{
    const personid=req.params.id;//extract by id
    const response=await Person.findByIdAndDelete(personid);
    if(!response)
    {
      return res.status(404).json({error:"person not found"});
    }
    console.log("deleted successfully");;
    req.status(404).json({message:'data deleted'});

  }
  catch(err)
  {
    res.status(500).json({error:"internal server error"});
  }
})
module.exports=router;
