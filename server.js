const Hapi = require('hapi');


const hostname = 'localhost';
const portno = 3000; 


const server = Hapi.Server({
    host: hostname,
    port: portno
});


const init = async () => {

    await server.start();
    console.log("Server up and running at port: " + portno);

}

require('./routes/routes')(server);

init()