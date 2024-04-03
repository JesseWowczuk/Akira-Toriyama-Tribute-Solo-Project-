const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')

const app = express();

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database not connected', err))

//middleware
app.use(express.json())

const port = 8000;

app.use('/', require('./routes/userRoutes'))


app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))