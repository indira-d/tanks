const express = require('express')
const app = express()

const port = 8010
app.use(express.static('public'))
app.listen(port,() => {
    console.log (`Tanks server listening on port ${8010}`)
})
