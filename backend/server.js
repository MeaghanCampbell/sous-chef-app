require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3001; 
const sequelize = require('./config/config')

// don't use force:true for production as it will drop & recreate my tables
sequelize.sync({ force: true })
.then(() => {
  console.log("Database synced");
})
.catch(error => {
  console.error("Error syncing database:", error);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});