require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const myWeekRoutes = require('./routes/myWeekRoutes')
const authenticate = require('./middleware/authenticate');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3001;
const sequelize = require('./config/config')

// add { force: true } inside of sync() if you want to drop and recreate tables every time for development
sequelize.sync()
.then(() => {
  console.log("Database synced");
})
.catch(error => {
  console.error("Error syncing database:", error);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(authenticate);
app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);
app.use('/my-week', myWeekRoutes)

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});