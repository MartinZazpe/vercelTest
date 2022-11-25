
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {

    // try {
    //     res.json({
    //         status: 200,
    //         message: "get data has succesfully"
    //     })
    // }
    // catch (error) {
    //     console.log(error)
    //     return res.status(500).send("server error")
    // }
    res.render('index')
})

module.exports = router