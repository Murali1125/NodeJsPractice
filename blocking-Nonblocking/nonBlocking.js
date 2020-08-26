var fs = require("fs");
fs.readFile("text.txt",function(error,data){
    if(error){
        console.log(error);
    }
    setTimeout(()=>{
        console.log(data.toString());
    },2000)
});
console.log("END of non blocking");