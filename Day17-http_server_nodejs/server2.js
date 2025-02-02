// const http = require('node:http')

// const server = http.createServer((req, res)=>{
//     const path = req.url;
//     // console.log("-->", path) this returns the url 

//     if(path=='/'){
//         res.end("this is the home page");
//     }else if(path=='/raj'){
//         res.end("this is the raj page");
//     }else{
//         res.end("this is the default page")
//     }
// });

// server.listen(1001, ()=>{
//     console.log("server started")
// })

// installed nodemon globally, to avoid restarting server again and again 



const http = require('node:http')
const server = http.createServer((req, res)=>{
    const path = req.url;
    res.setHeader("content-type", "text/html"); // file type html
    // res.setHeader("content-type", "text/plain");  //as it is 
    // console.log("-->", path) this returns the url    


    if(path=='/'){
        res.end("<h1 style='color: red'>Home Page</h1>");
    }else if(path=='/raj'){
        res.end("<h1 style='color: blue'>Raj Page</h1>");
    }else{
        res.end("this is the default page")
    }
});
server.listen(1001, ()=>{
    console.log("server started")
})


// api call: home page, send api call res in html