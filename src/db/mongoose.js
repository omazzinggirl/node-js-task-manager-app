const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        uppercase:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email id is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

const me = new User({
    name: 'Oishee  ',
    email:'oishee@abc.com',
    age: 28,
    password:'    erklq12**sjk    '

})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const t1 = new Task({
//     description: 'My Compliance Dashboard',
//     completed: false
// })

// t1.save().then(() => {
//     console.log(t1)
// }).catch((error) => {
//     console.log('Error!', error)
// })