const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/api/users',userRoutes);

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});