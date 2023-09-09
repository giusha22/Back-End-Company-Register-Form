require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;
const cors = require('cors')
const corsOptions = require('./config/corsOptions');
const Credentials = require('./middleware/credentials')
const cookieParser = require('cookie-parser');
connectDB();


app.use(Credentials);
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser());


app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'))
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/users', require('./routes/api/users'));
app.use('/employees', require('./routes/api/employees'));



mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
