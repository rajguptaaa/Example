//const fs = require("node:fs");
// const ans = fs.writeFileSync("./dummy2.txt", "Hello! World!");
// const asnRead = fs.readFileSync("./dummy2.txt", "utf-8");
// console.log(asnRead);


const fsPromises = require("node:fs/promises");

const myWriteFile = async () => {
    try {
        const ans = await (fsPromises.writeFile("./dummy2.txt", "Hello ji!"));
    } catch (error) {
        console.log(error);
    }
}

    const myReadFile = async () => {
        try {
            const ans = await (fsPromises.readFile("./dummy2.txt", "utf-8"));
            console.log(ans);
        } catch (error) {
            console.log(error);
        }
    }

myWriteFile();
myReadFile();
