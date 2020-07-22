var express= require('express')
var app=express()
const port=9800
app.get('/',function(req,res){
    res.status(200).send("api is running")
})
app.listen(port,(err) =>{
{
    if (err) throw err
}
    console.log(`server is running on port ${port}`)
})
