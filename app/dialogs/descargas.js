var builder = require('botbuilder'); //usar libreria botbuilder
var restify = require('restify'); //usar libreria restify webservice

module.exports = function (session) {
        var ilustraciones = new builder.HeroCard(session)
            .title('Ilustraciones')
            .subtitle('Brandbook oficial')
            .text('Acá podras descargar el brandbook de ilustraciones Microsoft')
            .images([
                builder.CardImage.create(session, 'http://www.turntopage84.com/uploads/1/9/0/7/19078365/cloud-mechanics_orig.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://aka.ms/microsoftilustracion/', 'Descarga')
            ]);

        var fotos = new builder.HeroCard(session)
            .title('Fotografías')
            .subtitle('Fotografías oficiales Microsoft')
            .text('Acá podras acceder al repositorio de fotografías oficiales de Microsoft')
            .images([
                builder.CardImage.create(session, 'http://www.newyorker.com/wp-content/uploads/2014/10/Vauhini-Corporations-and-Karma-1200.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://aka.ms/microsoftfoto/', 'Repositorio')
            ]);
        
        var logos = new builder.HeroCard(session)
            .title('Logos')
            .subtitle('Logos de productos Microsoft')
            .text('Acá podras acceder al repositorio de logos oficiales de Microsoft')
            .images([
                builder.CardImage.create(session, 'https://digitalsynopsis.com/wp-content/uploads/2013/12/microsoft-family-logos.gif')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://aka.ms/microsoftilustracion/', 'Descarga')
            ]);
        var software = new builder.HeroCard(session)
            .title('Software')
            .subtitle('Productos Microsoft')
            .text('Acá podras acceder al portal de descarga de software y product keys Microsoft')
            .images([
                builder.CardImage.create(session, 'http://www.geocities.ws/everything4u/mic.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://my.visualstudio.com/downloads', 'Portal de descargas')
            ]);
        
        // Creamos un array de tarjetas
        var tarjetas = [software, fotos, logos,ilustraciones];

        // Adjuntamos la tarjeta al mensaje
        var msj = new builder.Message(session).attachmentLayout(builder.AttachmentLayout.carousel).attachments(tarjetas);
        session.send(msj);
}