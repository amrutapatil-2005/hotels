// const mongoose=require("mongoose");

// //url
// const mongoURL='mongodb://localhost:27017/hotels';

// //establish connection with database
// mongoose.connect(mongoURL,{
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// })
// const db=mongoose.connection;

// //event listener
// db.on('connected',()=>{
//   console.log("database is connected");
// });
// db.on('disconnected',()=>{
//   console.log("database is disconnected");
// });
// db.on('error',()=>{
//   console.log("error occuring to connect the database ",error
//   );
// })

// //export the database
// // mongoose.disconnect();
// module.exports=db;
const mongoose = require("mongoose");

// MongoDB URL
const mongoURL = 'mongodb://localhost:27017/hotels';

// Establish connection with the database
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Event listeners
db.on('connected', () => {
  console.log("Database is connected");
});

db.on('disconnected', () => {
  console.log("Database is disconnected");
});

db.on('error', (error) => {
  console.log("Error connecting to the database:", error);
});

// Export the database connection
module.exports = db;
