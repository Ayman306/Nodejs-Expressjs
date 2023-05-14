// const add =require('./add')
// console.log("From the index")
// const sub=(a,b)=>{
//     return a-b
// }
// const subs=sub(9,2);
// console.log(subs,"From the index subs");
// const sum=add(1,2)
// console.log(sum,"From the module sum");
// const sum2=add(9,8)
// console.log(sum2,"called again");

// require('./batman')
// require('./superman')

// getting particular functions from the class of function 

// const superhero= require("./super-hero");
// console.log(superhero.getName());
// superhero.setName("Superman");
// console.log(superhero.getName())

// const newsuperhero=require("./super-hero")
// console.log(newsuperhero.getName())

// const add=require("./math")
// console.log(add(3,2));

// const math = require('./math')
// const {
//     add,subtract
// }=math
// console.log(add(2,3));
// console.log(subtract(3,2));

// const data =require('./data.json')
// console.log(data.name);

// import built in module 

// const path= require('node:path');
// console.log(__filename);
// console.log(__dirname)
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// // console.log(path.extname(__dirname));
// console.log(path.join('/folder1','folder2','index.html'));
// console.log(path.join('/folder1','//folder2','index.html'));
// console.log(path.join('/folder1','//folder2','../index.html'));
// console.log(path.join('/folder1','//folder2','../index.html'));
// console.log(path.join(__dirname,'data.json'));


// console.log(path.resolve('folder1','folder2','index.html'));
// console.log(path.resolve('/folder1','/folder2','index.html'));
// console.log(path.resolve('/folder1','//folder2','../index.html'));
// console.log(path.resolve('/folder1','//folder2','../index.html'));
// console.log(path.resolve(__dirname,'data.json'));

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// function higherorderFunction(callBackFunction){
//     const name='Brozone';
//     callBackFunction(name)
// }
// higherorderFunction(greet);

// const EventEmitter = require ("node:events")
// const emitter= new EventEmitter()
// emitter.on('Order-anything',(item,drink)=>{
//     console.log(`Order recieved, cooking ${item} and brewing ${drink} right away`);
// })
// console.log('Do work before event occurs in the system');
// emitter.on('Order-anything',(size)=>{
//     if(size=='large'){
//         console.log('Serving complimentory drink');
//     }
// })
// emitter.emit("Order-anyting",'large')
// emitter.emit("Order-anything",'pizza','pepsi')

// const pizzaShop= require('./pizza-shop')
// const DrinkMachine = require('./drink-machine')
// const pizaShop=new pizzaShop();
// const drinkMachine=new DrinkMachine()
// pizaShop.on('order',(size,toping)=>{
//     console.log(`order recieved: Baking a ${size} pizza with ${toping}`);
//     drinkMachine.serveDrink(size)
// });
// pizaShop.order('large','corn')
// pizaShop.displayOrderNumber()

// const buffer= new Buffer.from("Ayman");
// console.log(buffer.toJSON());
// console.log(buffer.toString());
// buffer.write("Code")
// console.log(buffer);

// console.log("log first");
// const fs = require('node:fs/promises')
// fs.readFile("file.txt",'utf-8')
// .then(data => console.log(data))
// .catch(err => console.log(err))
// console.log("log second");

// async function readFile(){
//     try{
//         const data = await fs.reafFile('file.txt','utf-8')
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// readFile();

// const fs =require('node:fs');
// console.log("First");
// const fileContent= fs.readFileSync("./file.txt","utf-8")
// console.log(fileContent);
// console.log("second");
// fs.readFile('./file.txt',"utf-8",(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })
// console.log("third");
// fs.writeFileSync('./file.txt',"Hello World ")
// fs.writeFile('./file.txt',"Hello World2",{flag:"a"},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File written");
//     }
// })


// fs streams 
// const fs = require("node:fs")
// const readableStream = fs.createReadStream('./file.txt',{
//     encoding:'utf8',
//     highWaterMark:2
// });
// const writableStream = fs.createWriteStream('./file2.txt');

// readableStream.on('data',(data)=>{
//     console.log(data);
//     writableStream.write(data)
// })

// Pipes

// const fs = require("node:fs")
// const zlib=require("node:zlib")
// const gzip = zlib.createGzip()
// const readableStream = fs.createReadStream('./file.txt',{
//     encoding:'utf8',
//     highWaterMark:2
// });
// readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))
// const writableStream = fs.createWriteStream('./file2.txt');

// readableStream.pipe(writableStream)


// http 

// sending json data as response 
// const http = require('node:http');
// const server = http.createServer((req,res)=>{
//     const superHero={
//         'firsName':"Bruce",
//         'lastName':'Wayne'
//     }
//     res.writeHead(200,{'Content-Type':"application/json"});
//     res.end(JSON.stringify(superHero))    
// });
// server.listen(3000,()=>{
//     console.log("Sever running on port 3000");
// })

//sending as html file
// const http = require('node:http');
// const fs=require("node:fs")
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':"text/html"});
//     fs.createReadStream(__dirname+ "./index.html").pipe(res);      
// });
// server.listen(3000,()=>{
//     console.log("Sever running on port 3000");
// })

//sending dynamic html files

// const http = require('node:http');
// const fs=require("node:fs")
// const server = http.createServer((req,res)=>{
//     const name ="Ayman"
//     res.writeHead(200,{'Content-Type':"text/html"});
//     let html = fs.readFileSync('./index.html','utf-8')
//     html=html.replace("{{name}}",name)
//     res.end(html)    
// });
// server.listen(3000,()=>{
//     console.log("Sever running on port 3000");
// })

// routing in http

// const http = require('node:http');
// const fs=require("node:fs")
// const server = http.createServer((req,res)=>{
//    if(req.url=='/'){
//     res.writeHead(200,{'Content-Type':"text/html"})
//     res.end("Home page")
//    }else if(req.url=='/about'){
//     res.writeHead(200,{'Content-Type':"text/html"})
//     res.end("about")
//    }else if(req.url=='/api'){
//     res.writeHead(200,{'Content-Type':"application/json"})
//     res.end(JSON.stringify({
//         'firsName':"Bruce",
//         'lastName':'Wayne'
//     }))
//    }else{
//     res.writeHead(404);
//     res.end("Page not found")
//    }
// });
// server.listen(3000,()=>{
//     console.log("Sever running on port 3000");
// })


// threading 
// const crypto=require("node:crypto")
// process.env.UV_THREADPOOL_SIZE=3
// const MAX_CALLS=2;
// const start = Date.now()
// for(let i=0;i<MAX_CALLS;i++){
//     crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
//         console.log(`Hash: ${i+1}`,Date.now()-start);
//     });
// }
// const start= Date.now()
// crypto.pbkdf2Sync("password",'salt',100000,512,'sha512');
// crypto.pbkdf2Sync("password",'salt',100000,512,'sha512');
// crypto.pbkdf2Sync("password",'salt',100000,512,'sha512');

// console.log('Hash:',Date.now()-start);

const https=require("node:https")
const MAX_CALLS=8;
const start = Date.now()
for(let i=0;i<MAX_CALLS;i++){
   https
   .request("https://www.google.com",(res)=>{
    res.on("data",()=>{});
    res.on("end",()=>{
        console.log(`Request: ${i+1}`,Date.now()-start);
    });
   })
   .end();
};