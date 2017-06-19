var builder = require('botbuilder'); //usar libreria botbuilder
var restify = require('restify'); //usar libreria restify webservice

module.exports = ([function (session) {
    builder.Prompts.choice(session, 'Necesitas ayuda con:', 'Lista de Precios|Pedir Descuentos|Pedir BIF|PO', { listStyle: builder.ListStyle.button });
    },
    function (session, results) {
  
            switch (results.response.entity) {
                case 'Lista de Precios':
                    session.send('Puedes encontrar las lista de precios de cada tipo de contrato en el siguiente link: https://aka.ms/listaprecios. De no tener acceso, deberás solicitarlo siguiendo la instrucción entregada en el sharepoint.');
             
                    break;
                case 'Pedir Descuentos':
                    session.send('Para pedir descuentos especificos o programáticos en algun producto debes ingresar a http://bcweb.microsoft.com y generar un "exception request". Si es tu primera vez ingresando a la tool deberás pedir acceso ingresando a http://idweb/identitymanagement/aspx/groups/AllGroups.aspx y unirte al SG (Security Group) "BCWEB_User Access". Si necesitas mayor información respecto a cómo generar un request de bcweb, puedes descargar el siguiente documento https://aka.ms/bcwebguide y utilizarlo cómo guía.');

                    break;
                case 'Pedir BIF':
                    session.send('Para pedir un Business Investment Fund debes ingresar a http://getbif y generar la solicitud.');
                 
                    break;
                case 'PO':
                    session.send('Para hacer una orden de compras debes ingresar a https://myorder.');
       
                    break;
        }

     
}
]);