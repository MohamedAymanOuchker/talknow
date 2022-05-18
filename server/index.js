const express = require('express'); 
const app = express();
const userRoute = require('./routes/User');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/user', userRoute);

app.listen(3001, (req, res) => {
    console.log('Server is running on port 3001');
});