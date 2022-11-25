
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var path = require('path')
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, 'public')))

const product = require('./api/product')


app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})


app.use('/', product)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })