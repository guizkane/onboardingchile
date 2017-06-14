var restify = require('restify'); //usar libreria restify webservice
var builder = require('botbuilder'); //usar libreria botbuilder

//levantar restify
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('%s listening to %s', server.name, server.url);
});
//conexión con credenciales
var connector = new builder.ChatConnector({
    appId:'',
    appPassword:''
});

//creación de bot con Universalbot
var bot = new builder.UniversalBot(connector); //instanciar bot de tipo UniversalBot con conector
server.post('api/messages', connector.listen());


//Dialogos
bot.dialog('/', [
    function (session) {
        session.beginDialog('/Inicio');
    },
    function (session, results) {
        session.beginDialog(seleccionMenu(results));

    },
    function (session, results) {
        session.beginDialog(seleccionMenu(results));
    }
]).triggerAction({matches: /^inicio$/i });

bot.dialog('/Legal',require('./app/dialogs/legal.js'));
bot.dialog('/Inicio',require('./app/dialogs/inicio.js'));
bot.dialog('/Glosario',require('./app/dialogs/glosario.js'));
bot.dialog('/Información General',require('./app/dialogs/informaciongeneral.js'));
bot.dialog('/Descargas',require('./app/dialogs/descargas.js'));
bot.dialog('/Buscar Empleados MS', require('./app/dialogs/buscadorempleados.js'));
bot.dialog('/Comercial', require('./app/dialogs/comercial.js'));
bot.dialog('/Nuevo Empleado', require('./app/dialogs/nuevoempleado.js'));







//---------------------------------------------------------------


var seleccionMenu = function(objetoEleccion){
    let valoreleccion = `/${objetoEleccion.response.entity}`
    return(valoreleccion);
};  
