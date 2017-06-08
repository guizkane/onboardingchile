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
bot.dialog('/',[
    function(session){
    builder.Prompts.choice(session,'Hola, soy un bot de On-boarding. Puedo asistirte con los siguientes temas:','Glosario|Información General|Descargas|Buscar Empleado MS',{listStyle: builder.ListStyle.button});
        },
        function(session, results){
            let menu = `/${results.response.entity}`
            session.beginDialog(menu);
        }
]
);

bot.dialog('/Glosario',require('./app/dialogs/glosario.js'));

bot.dialog('/Información General',require('./app/dialogs/informaciongeneral.js'));

bot.dialog('/Descargas',require('./app/dialogs/descargas.js'));

bot.dialog('/Buscar Empleados MS',require('./app/dialogs/buscadorempleados.js'));


//PROBANDOOO