
      const express = require('express');
      const app = express();
      require('dotenv').config();
      const cors = require('cors');
const connectToDB = require('./db/conn');

      // middlewares
      app.use(cors());
      app.use(express.json());
      app.use('/api/addData', require('./routes/addData'))
      app.use('/api/getData', require('./routes/getData'))
      // defining port
      const PORT = process.env.PORT || 3001;
      

      // connection to DB
      connectToDB();
      
      // setting up an empty GET Route
      app.get('/', (req, res)=>{res.json({message: "You've come to the right place... it's a GET request!!"})});
      
      // Starting Server on PORT
      app.listen(PORT, () => console.log('Server started on PORT Number: ' + PORT))
      