//mongodb driver
const mongodb = require('mongodb')
// to innitialize the connection
// give access to functions necessary to connect to the database
// and perform CRUD operations
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-app'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connected Successfully...')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Sonam',
    //     age: 23
    // }, (error, results) => {
    //     if (error){
    //         return console.log('Unable to insert user...')
    //     }
    //     console.log(results.ops)
    // }
    // )

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 27
    //     }, {
    //         name: 'Gunther',
    //         age: 32
    //     }
    // ], (error, results) => {
    //     if (error) {
    //         return console.log('Unable to insert documents...')
    //     }

    //     console.log(results.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'AWS Module 6',
            status: true
        }, {
            description: 'My Compliance Dashboard',
            status: true
        }, {
            description: 'Udemy Course',
            status: false
        },
    ], (error, results) => {
        if (error) {
            return console.log('Unable to insert documents...')
        }

        console.log(results.ops)
    })



})