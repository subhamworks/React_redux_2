const app=require("./app")
const http = require('http');
const server = http.createServer(app);

server.listen(2000,()=>{console.log("app listen on 2000")}
)