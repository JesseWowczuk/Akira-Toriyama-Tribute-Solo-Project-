const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express();
const port = 8000;

app.use('/', require('./routes/userRoutes'))


app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))