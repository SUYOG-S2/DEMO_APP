import express from "express";
import Connection from "./Connection.js";
import User from "./Schema/User.js";
import bodyParser from "body-parser";

let app = express();
app.use(bodyParser.json())
const port = 8000;

app.get('/', async (req,res) => {
    // res.send("Fine as Hell......");

    let data = await User.find();
    res.send(data);
});

app.post("/post", async (req,res) => {

  let body = req.body;
  // console.log(body);

  let data = await User.find({ email : body.email });
  // console.log(data,"Same Thing");
  if (data.length > 0) {
    return res.status(401).send({ message : "Oops! The user already exists" });
  }
    

  try{
    let value = await User.insertMany(body);
    res.status(201).send({ message : "Data Inserted",value })

  }catch(error) {
    console.log(error)
  }
})

app.patch("/update/:id", async (req,res) => { 
    let body = req.body;
    let id = req.params.id;
    // console.log(id);
    try{
      let value = await User.findByIdAndUpdate(id, body, { new : true });
      res.status(201).send({ message : "Data Updated", value })

    }catch(error) {
      console.log(error)
    }
})

app.delete("/delete/:id", async (req,res) => {

  try{
    let id = req.params.id;
    let data = await User.findByIdAndDelete(id);
    res.status(201).send({ message : "Data Deleted", data })

  }catch(error) {
    console.log(error)
  }
})

Connection().then(() => {
app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
})