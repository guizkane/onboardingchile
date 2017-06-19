var builder = require('botbuilder'); //usar libreria botbuilder
var restify = require('restify'); //usar libreria restify webservice

module.exports = ([function (session) {
    builder.Prompts.choice(session, 'Necesitas ayuda con:', 'Obtener Badge|Obtener Tag Estacionamiento|Organigrama|Cabify|Impresoras|Salas', { listStyle: builder.ListStyle.button });
},
function (session, results) {

    switch (results.response.entity) {
        case 'Obtener Badge':
            session.send('Para pedir una nueva smartcard debes seguir la siguiente guía descargable en https://aka.ms/smartcardtutorial.');

            break;
        case 'Obtener Tag Estacionamiento':
            session.send('Para conseguir el tag para el estacionamiento debes dirigirte a recepción del tercer piso y solicitarlo a Alejandro Martin, Paula Espinoza o Claudia Espinosa.');

            break;
        case 'Organigrama':
            session.send('En el siguiente link: http://who/ogflogel podrás ver un organigrama con Oliver Flogel en la cabecera.');

            break;
        case 'Cabify':
            session.send('Para pedir un Cabify debes bajar la aplicación (iOS o Android) o bien ingresar a la página web www.cabify.cl y acceder a tu cuenta. Tu usuario será tu correo corporativo @microsoft y la contraseña deberás crearla mediante el correo de activación que se te enviará al momento de creación de tu cuenta Cabify.Si no te llega el correo de activación, o si bien este correo caduca, podrás crear la cuenta utilizando la opción de "Recuperar Contraseña" de Cabify.');

            break;
        case 'Impresoras':
            session.send('Para imprimir en las impresoras de Microsoft deberás: 1) Apretar botón "Print". 2) Apretar "Printer Properties". 3) En la pestaña Paper/ Quality apretar botón "Advanced". 4) Finalmente, bajo "Document Options", deberás indicar el campo "PIN-Protected Printing" en "ON" y en el campo "PIN-Protected Printing PIN" ingresar tu contraseña que luego deberás replicar en la impresora de forma presencial.');

            break;
        case 'Salas':
            session.send('Para reservar una sala debes invitarla mediante la función "Meeting" de Outlook (al igual que cómo invitarías a una persona) utilizando el scheduling assistant. El siguiente alias "cfchall@microsoft.com" contiene la gran mayoría de las salas reservables.Por lo tanto, si no sabes el alias específico de una sala, puedes agregar el alias descrito anteriormente y expandirlo para obtener los diferentes alias.');

            break;
    }


}
]);

