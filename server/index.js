const express = require('express'); 
const app = express();
const userRoute = require('./routes/User');
const uploadRoute = require('./routes/Upload');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/user', userRoute);
app.use('/upload', uploadRoute);

app.listen(3001, (req, res) => {
    console.log('Server is running on port 3001');
});