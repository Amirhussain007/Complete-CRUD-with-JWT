const express=require("express")
const router = require("./routes/userRoute")
const AuthenticateToken=require("./middleware/auth")
const app=express()
const port=process.env.PORT || 8000

require("./DB/conn")

app.use(express.json())

app.use("/", router)

app.get("/use", AuthenticateToken, (req, res)=>{
    res.status(200).send({success:true, message:"Authenticated"})
})

app.listen(port, ()=>{
    console.log(`server is working on port ${port}`)
})