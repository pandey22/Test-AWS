const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello AWS!")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})