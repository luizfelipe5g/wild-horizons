import http from "node:http";

const PORT = 8000;

const server = http.createServer((request, response) => {

   if(request.url === "/api" && request.method === "GET") {
      response.end("Hello World"); 
   }

});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));