const { send } = require('@sendgrid/mail')
const sgMail = require('@sendgrid/mail')
const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'oishee.etc@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app ` + name + ` !`
    })
}


const cancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'oishee.etc@gmail.com',
        subject: 'Goodbye!',
        text: `Thanks for letting us be a part of your journey ` + name + ` !`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancellationEmail
}