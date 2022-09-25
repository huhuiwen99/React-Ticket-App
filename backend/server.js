const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// connect to db
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// create route
app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the Support Desk API'})
    // res.send('Hello')
})


// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))