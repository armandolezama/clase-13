const http = require('http');
const port = 8000;

function responseHandler(request, response){

    response.write("Hola desde el servidor");
    response.end();
}

const server = http.createServer(responseHandler);

function callback(){
    console.log("El servidor está funcionando en el puerto " + port)
}

server.listen(port, callback);

