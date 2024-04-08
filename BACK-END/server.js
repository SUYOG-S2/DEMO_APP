import express from "express";
import Connection from "./Connection.js";

let app = express();


const port = 8000;
app.get('/',(req,res) => {
    res.send("Fine as Hell......");
});

Connection().then(() => {
app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
})