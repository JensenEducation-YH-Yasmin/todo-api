const express = require('express')
const cors = require('cors')

const app = express()
const noteRouter = require('./routes/notes')
const PORT = 5000


app.use(cors())
app.use(express.json())
app.use('/api/notes', noteRouter)


app.listen(5000, () => console.log(`Server started on port ${PORT}`))


