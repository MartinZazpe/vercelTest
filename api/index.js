// const http = require('http')
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.write('Hello node')
//     res.end()
// })


// server.listen(port, (error) => {
//     if (error) {
//         console.log('Something went wrong ' + error)
//     } else {
//         console.log('Server is listening on port ' + port)
//     }
// })


// const app = require('express')()
// const { v4 } = require('uuid')

// app.get('/api', (req, res) => {
//     const path = `/api/item/${v4()}`
//     res.setHeader('Content-Type', 'text/html')
//     res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
//     res.write('Hello node')
//     res.end(`Hello! Go to item: <a href="${path}">${path}</a>`)
// })

// app.get('/api/item/:slug', (req, res) => {
//     const { slug } = req.params
//     res.end(`Item: ${slug}`)
// })

// module.exports = app



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})