const http = require('http');
const fs = require('fs');
const port = 8000;

const textoDePrueba = 'Js y node son herramientas  fáciles que deben de usarse correctamente para implementar una web, la parte del server es confusa pero se puede lograr aprender.'

function responseHandler(request, response){

    fs.readFile('static/index.html', {encoding: "utf8"}, function(err, contenido){
        if (err){
            throw err;
        }

        response.writeHeader(200, {"Content-Type": "text/html"})
        response.write(contenido);
        response.end();
    })
}



const server = http.createServer(responseHandler);



function callback(){
    console.log("El servidor está funcionando en el puerto " + port)
}

server.listen(port, callback);

