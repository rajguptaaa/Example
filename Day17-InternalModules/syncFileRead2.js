// const fs = require("node:fs");
// function myReadFile(){
//     console.log("reading file");
//     const ans = fs.readFileSync('./dummy.txt', "UTF-8");
//     console.log(ans);
//     console.log("file reading done");
// }
// myReadFile()


const fsPromises = require("node:fs/promises");
const myReadFile = async () => {
    try{
        const ans = await( fsPromises.readFile("./dummy.txt", "utf-8"));
        console.log(ans);
    }catch(error){
        console.log(error);
    }
}
myReadFile();


