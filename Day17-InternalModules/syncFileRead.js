//sync : callStack gets Blocked.
//async : callStack doesn't get Block. 

// promise API, callback API, sync 

const fs = require('node:fs');

const ans = fs.readFileSync('./dummy.txt', "UTF-8");

console.log(ans); //it will return buffer (if without utf-8)

