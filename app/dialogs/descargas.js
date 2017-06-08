var builder = require('botbuilder'); //usar libreria botbuilder
var restify = require('restify'); //usar libreria restify webservice

module.exports = function (session) {
        var ilustraciones = new builder.HeroCard(session)
            .title('Ilustraciones Microsoft')
            .subtitle('Brandbook oficial')
            .text('Acá podras descargar el brandbook de ilustraciones Microsoft')
            .images([
                builder.CardImage.create(session, 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://docs.botframework.com/en-us/', 'Aprende')
            ]);

        var heroCard2 = new builder.HeroCard(session)
            .title('Esta es una OTRA de tipo Hero Card')
            .subtitle('Este es su correspondente subtítulo')
            .text('Sigan (si no lo hicieron) a Marcelo Felman en Twitter: @mfelman')
            .images([
                builder.CardImage.create(session, 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://docs.botframework.com/en-us/', 'Aprende')
            ]);

        // Creamos un array de tarjetas
        var tarjetas = [ilustraciones, heroCard2];

        // Adjuntamos la tarjeta al mensaje
        var msj = new builder.Message(session).attachmentLayout(builder.AttachmentLayout.carousel).attachments(tarjetas);
        session.send(msj);
}