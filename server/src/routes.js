const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('./models/User');
const Score = require('./models/Score');
const secret = require('./config/keys').TokenSecret;
const authenticate = require('./config/auth');

const routes = express.Router();

// AUTHENTICATION ROUTES

routes.get('/', (req, res) => {
  res.send('Quizzera');
});

routes.post('/register', (req, res) => {
  const { username, password, password2 } = req.body;
  let errors = [];
  
  if (!username || !password || !password2) {
    errors.push('Please, fill in all fields.');
  }

  if (password !== password2) {
    errors.push('Passwords don\'t match.');
  }

  if (password.length < 6) {
    errors.push('Password must have at least 6 characters.');
  }

  if (errors.length > 0) {
    res.json({ errors });
  } else {
    User.findOne({ username }, async (error, user) => {
      if (error) {
        console.log(error);
        errors.push('Something is wrong with our server, try again later.');
        res.json({ errors });
      }

      if (user) {
        errors.push('This username is already in use.');
        res.json({ errors });
      } else {
        const newUser = new User({ username, password });
        const user = await newUser.save();

        if (user) {
          console.log(user);

          const newScore = new Score({ user: user.id });
          const score = await newScore.save();

          if (score) {
            console.log(score);
            const token = jwt.sign({ id: user.id }, secret);
            res.json({ token });
          }
        }
      }
    });
  }
});

routes.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select('+password');

  if (!user) {
    return res.status(400).send({ error: 'User not found!'});
  }

  if (!user.comparePassword(password)) {
    return res.status(400).send({ error: 'Password do not match!'});
  }

  const token = jwt.sign({ id: user.id }, secret);

  res.send({ token });
});

// SCORE ROUTES

routes.post('/score', authenticate, async (req, res) => {
  const score = await Score.findOne({ user: req.userId });

  if (!score) {
    return res.status(400).send({ error: 'Score not found!'});
  }

  
  score.questionsAnswered += req.body.questionsAnswered;
  score.correctAnswers += req.body.correctAnswers;
  score.successTime += req.body.successTime;
  
  if (req.body.isHard) {
    score.correctHardAnswers += req.body.correctAnswers;
    score.hardSuccessTime += req.body.successTime;
  }
  
  const newScore = await score.save();
  
  res.json(newScore);
});

routes.get('/rank', async (req, res) => {
  Score.find({}).populate('user').exec((err, scores) => {
    if(err)
      console.log(err);

    if (scores) {
      let accuracy = [], speed = [], wisdom = [];

      scores.forEach(function (score) {
        accuracy.push({ username: score.user.username, score: score.accuracy });
        speed.push({ username: score.user.username, score: score.speed });
        wisdom.push({ username: score.user.username, score: score.wisdom });
      });

      accuracy.sort((a, b) => b.score - a.score).splice(3);
      speed.sort((a, b) => b.score - a.score).splice(3);
      wisdom.sort((a, b) => b.score - a.score).splice(3);

      res.json({ accuracy, speed, wisdom });
    }
  });
});

routes.get('/user', authenticate, async (req, res) => {
  Score.findOne({ user: req.userId }).populate('user').exec((err, score) => {
    if(err)
      console.log(err);

    if (score) {
      res.json({
        username: score.user.username,
        accuracy: score.accuracy,
        speed: score.speed,
        wisdom: score.wisdom
      });
    }
  });
});

module.exports = routes;