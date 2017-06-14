var builder = require('botbuilder'); //usar libreria botbuilder
var restify = require('restify'); //usar libreria restify webservice

module.exports = function (session) {
        var nda = new builder.HeroCard(session)
            .title('NDAs')
            .subtitle('Acuerdos de Confidencialidad')
            .text('Aquí puedes crear NDAs y revisar los que ya se encuentran firmados')
            .images([
                builder.CardImage.create(session, 'http://www.turntopage84.com/uploads/1/9/0/7/19078365/cloud-mechanics_orig.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://ndaplusweb.cloudapp.net/', 'Ir a NDA Web')
            ]);

        var contratos = new builder.HeroCard(session)
            .title('Contratos')
            .subtitle('Contractweb')
            .text('Aquí puedes buscar contratos ya firmados, descargar templates y elevar requests para solicitar ayuda')
            .images([
                builder.CardImage.create(session, 'http://www.newyorker.com/wp-content/uploads/2014/10/Vauhini-Corporations-and-Karma-1200.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'aka.ms/ContractWeb', 'Ir a Contractweb')
            ]);
        
        var certificados = new builder.HeroCard(session)
            .title('Certificados')
            .subtitle('Certificados y Poderes MS Chile y MSLI')
            .text('Aquí podrás descargar certificados de vigencia y poderes para Microsoft Chile y MSLI')
            .images([
                builder.CardImage.create(session, 'https://digitalsynopsis.com/wp-content/uploads/2013/12/microsoft-family-logos.gif')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://microsoft.sharepoint.com/teams/CELAChile/_layouts/15/guestaccess.aspx?guestaccesstoken=ucR%2fENkkQhDRZnnfjoF1hKdkwm7rC2lxs8nQLNqJNSc%3d&folderid=2_17062a3f121ac42138f536fb837f511d5&rev=1', 'Descarga')
            ]);
        var compliance = new builder.HeroCard(session)
            .title('Compliance')
            .subtitle('Información sobre compliance')
            .text('Aquí podrás ir al portal de MS Policy e informarte sobre lsa normas de compliance para Microsoft')
            .images([
                builder.CardImage.create(session, 'http://www.geocities.ws/everything4u/mic.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://microsoft.sharepoint.com/sites/mspolicy', 'Ir a MS Policy')
            ]);
        
        // Creamos un array de tarjetas
        var tarjetas = [nda, contratos, certificados, compliance];

        // Adjuntamos la tarjeta al mensaje
        var msj = new builder.Message(session).attachmentLayout(builder.AttachmentLayout.carousel).attachments(tarjetas);
        session.send(msj);
}