var builder = require('botbuilder'); //usar libreria botbuilder
var restify = require('restify'); //usar libreria restify webservice

module.exports = function (session) {
    
    builder.Prompts.choice(session, 'Información general:', 'Legal|Comercial|Recursos Humanos|Nuevo Empleado|Otros', { listStyle: builder.ListStyle.button });
},
    function (session, results) {
        session.endDialogWithResult(results);
    }
