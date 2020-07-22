var fs = require('fs');
/*fs.writeFile('Mytext.txt','This is file',function(err){
    if (err) throw err;
    console.log('file created');
 })*/
   

/* fs.appendFile('Mytext.txt',' file is appended',(err) =>{
     if (err) throw err;
     console.log("file appended");
 })*/

 /*fs.readFile('Mytext.txt','utf-8',(err,data) => {
     if (err) throw err;
     console.log(data);
 })*/

 /*fs.readFile('db.json','utf-8',(err,data) => {
    if (err) throw err;
    console.log(data);
})*/

/*fs.rename('Mytext.txt','Myfile.txt',(err) =>{
    if (err) throw err;
    console.log('renamed successfully');
})*/


fs.unlink('Myfile.txt',(err) =>{
    if (err) throw err;
    console.log('deleted successfully');
})