
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://maather985:<Tg8WfZdqQiHtiM57>@cluster0.5t7rbpu.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
});

// Define user model
const User = mongoose.model('User', userSchema);

// Log in an existing user
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      res.status(401).send('Invalid email or password');
    } else {
      // Generate JWT
      const token = jwt.sign({ email }, 'secret');

      // Retrieve user data
      const userData = { email: user.email, name: user.name };

      res.json({ token, user: userData });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Unable to log in');
  }
});

// Sign up a new user
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });

    // Generate JWT
    const token = jwt.sign({ email }, 'secret');

    // Retrieve user data
    const userData = { email: user.email, name: user.name };

    res.json({ token, user: userData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Unable to sign up');
  }
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});