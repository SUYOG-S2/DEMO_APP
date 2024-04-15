import express from "express";
import Connection from "./Connection.js";
import User from "./Schema/User.js";
import bodyParser from "body-parser";

let app = express();
app.use(bodyParser.json())
const port = 8000;

app.get('/',async (req,res) => {
    // res.send("Fine as Hell......");

    let data = await User.find();
    res.send(data);
});

app.post("/post",async (req,res) => {

  let body = req.body;
  console.log(body)

  try{
    let value = await User.insertMany(body);
    res.status(201).send({message : "data inserted",value})
  }catch(error){
    console.log(error)
  }
})

Connection().then(() => {
app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
})