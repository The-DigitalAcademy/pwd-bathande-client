require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors())

const productRoute = require('./routes/productRoutes')

app.use('/api/products', productRoute)

app.get('/', (req, res)=> res.send('Hello World'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});