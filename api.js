const express = require('express')

const app = express()
const noteRouter = require('./routes/notes')
const PORT = 5000

app.use(express.json())
app.use('/api/notes', noteRouter)


app.listen(5000, () => console.log(`Server started on port ${PORT}`))


