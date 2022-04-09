const express = require('express')
const cors = require('cors')
const router = require('./routes')

const port = 3001

const app = express()

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET, POST, PUT, DELETE",
      credentials: true,
    })
  );

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', router)

app.listen(port, () => {
    console.log(`server running on Port ${port}`)
})



