const express = require('express')
const bodyParser = require('body-parser')
const mockdb = express()

mockdb.use(bodyParser.urlencoded({ extended: true }))
mockdb.use(bodyParser.json())

mockdb.get('/getSomeData', async (req, res) => {
    console.log('getSomeData called.')
    res.send({
        inPants: 'jizz',
        island: 'isLonely'
    })
})

module.exports = mockdb