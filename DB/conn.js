const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/MVC")
.then(()=>console.log("DB is connected"))
.catch((err)=>console.log("No Connected"))