const mongoose = require('mongoose')

const db_connection = 'mongodb+srv://admin:P%40ssword01@cluster0.myqsr.mongodb.net/my_database'

const db = () => {
    try {
        mongoose.connect(db_connection, {
            useNewUrlParser: true
        })

    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    db
}