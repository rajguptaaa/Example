const http = require('node:http');
const https = require('node:https');

const server = http.createServer((req, res) => {
    const path = req.url;
    if (path == '/api-data') {
        https.get('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true', (api_Res) => {
            let data = '';
            api_Res.on('data', (chunk) => { //data chunks collect karna hai aur empty data variable mai add karna hai
                data += chunk;
            });

            api_Res.on('end', () => {
                // res.setHeader("content-type", "text/plain"); //plain text format 
                
                res.setHeader("content-type", "text/html") //html format
                res.end(data);                             //data chunk ko as a response send karna hai

                //res.end("<h2 style='color : red'>${data.temperature}</h2>"); //as it is print ho raha hai
            });
        }).on('error', (err) => {
            res.end('Error fetching data');
        });
    } else {
        res.end("Hello from server 3");
    }
});

const PORT = 1003;
server.listen(PORT, () => {
    console.log(`Server started successfully at port ${PORT}`);
});

