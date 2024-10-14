const express=require("express");
const cors=require("cors");
const rout=require("./routes/Compile");
const app=express();
const port=4000;

app.use(cors());


//Middleware
app.use(express.text());

// Routing
app.use("/api/v1",rout);

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
});


app.get("/",(req,res)=>{
    res.send("Hello")
});




