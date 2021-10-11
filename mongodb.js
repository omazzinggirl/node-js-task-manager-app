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

    db.collection('users').insertOne({
        name: 'Oishee',
        age: 22
    })
})