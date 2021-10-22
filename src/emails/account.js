// const { send } = require('@sendgrid/mail')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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