var restify = require('restify'); //usar libreria restify webservice
var builder = require('botbuilder'); //usar libreria botbuilder

//levantar restify
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('%s listening to %s', server.name, server.url);
});
//conexión con credenciales
var connector = new builder.ChatConnector({
     appId:'835c3f82-acdc-454c-b1b4-e326f9557eb5',
    appPassword:'rdDqzar8pddEmM7rc9EshmK'
});

//creación de bot con Universalbot
var bot = new builder.UniversalBot(connector); //instanciar bot de tipo UniversalBot con conector
server.post('api/messages', connector.listen());

// Send welcome when conversation with bot is started, by initiating the root dialog
bot.on('conversationUpdate', function (message) {
    if (message.membersAdded) {
        message.membersAdded.forEach(function (identity) {
            if (identity.id === message.address.bot.id) {
                bot.beginDialog(message.address, '/');
            }
        });
    }
});
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
]).triggerAction({ matches: /^inicio$/i })

    //Comandos globales (agregar LUIS)
    .beginDialogAction('Inicio', '/Inicio', { matches: /^Inicio$/i })
    .beginDialogAction('Legal', '/Legal', { matches: /^Legal$/i })
    .beginDialogAction('Glosario', '/Glosario', { matches: /^Glosario$/i })
    .beginDialogAction('Información General', '/Información General', { matches: /^Información General$/i })
    .beginDialogAction('Descargas', '/Descargas', { matches: /^Descargas$/i })
    .beginDialogAction('Buscar Empleados MS', '/Buscar Empleados MS', { matches: /^Buscar Empleados MS$/i })
    .beginDialogAction('Comercial', '/Comercial', { matches: /^Comercial$/i })
    .beginDialogAction('Nuevo Empleado', '/Nuevo Empleado', { matches: /^Nuevo Empleado$/i })
    .beginDialogAction('Volver', '/Inicio', { matches: /^Volver$/i })
    .beginDialogAction('Recursos Humanos', '/Recursos Humanos', { matches: /^Recursos Humanos$/i })
   
;



bot.dialog('/Legal',require('./app/dialogs/legal.js'));
bot.dialog('/Inicio',require('./app/dialogs/inicio.js'));
bot.dialog('/Glosario',require('./app/dialogs/glosario.js'));
bot.dialog('/Información General',require('./app/dialogs/informaciongeneral.js'));
bot.dialog('/Descargas',require('./app/dialogs/descargas.js'));
bot.dialog('/Buscar Empleados MS', require('./app/dialogs/buscadorempleados.js'));
bot.dialog('/Comercial', require('./app/dialogs/comercial.js'));
bot.dialog('/Nuevo Empleado', require('./app/dialogs/nuevoempleado.js'));
bot.dialog('/Recursos Humanos', require('./app/dialogs/hr.js'));








//---------------------------------------------------------------


var seleccionMenu = function(objetoEleccion){
    let valoreleccion = `/${objetoEleccion.response.entity}`
    return(valoreleccion);
};  
