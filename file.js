const fs = require("fs")

// //  Sync.....

// // fs.writeFileSync('./test.txt','hey There');


// // 

// //  Async .....
// // fs.writeFile('./test.txt','hello world Async',(err)=>{})

// // ? const result =fs.readFileSync('./contacts.txt',"utf-8"); // variable to declare the Sync file 
// // ? console.log(result) // file read 


// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// });

 

// fs.appendFileSync("./test.txt ",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt ",`${Date.now()} Hey There\n`);


// fs.cpSync("./test.txt","./copy.txt")
// fs.unlinkSync('./copy.txt')
// console.log(fs.statSync("./test.txt"));
// console.log(fs.statSync("./test.txt").isFile);

fs.mkdirSync("my-docs");

