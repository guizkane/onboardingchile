var builder = require('botbuilder'); //usar libreria botbuilder
var restify = require('restify'); //usar libreria restify webservice

module.exports = function(session){
    builder.Prompts.choice(session, 'Hola, soy un bot de On-boarding. ¿Qué tipo de información necesitas?:','Información General|Legal|Comercial|Recursos Humanos',{listStyle: builder.ListStyle.button});
        },
        function(session, results){
            seleccionMenu(results);
    }

