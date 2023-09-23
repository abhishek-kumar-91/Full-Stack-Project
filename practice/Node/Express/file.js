const fs = require("fs")
const os = require("os")

fs.writeFileSync("./text.txt", "Hey bro! how are you")
console.log(os.cpus().length)
// const result = fs.readFileSync("./text.txt", "utf-8")
// console.log(result)
// fs.appendFileSync("./test.txt", "helloHowAreYouf")
//  fs.readFile("./test.txt", "utf-8", (err, res)=>{
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log("Result", res);
//     }
//  })

// //  fs.copyFileSync("./text.txt", "./copy.txt")
//     // fs.unlinkSync("./copy.txt") 
//     console.log(fs.statSync("./text.txt").birthtime.toDateString())
