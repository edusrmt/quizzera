const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User'
  },
  questionsAnswered: {
    type: Number,
    default: 0
  },
  correctAnswers: {
    type: Number,
    default: 0
  },
  successTime: {
    type: Number,
    default: 0
  },
  correctHardAnswers: {
    type: Number,
    default: 0
  },
  hardSuccessTime: {
    type: Number,
    default: 0
  }
});

ScoreSchema.virtual('accuracy').get(function () {
  return this.correctAnswers ** 2 / this.questionsAnswered;
});

ScoreSchema.virtual('speed').get(function () {
  return this.correctAnswers ** 2 / this.successTime;
});

ScoreSchema.virtual('wisdom').get(function () {
  return this.correctHardAnswers ** 2 / this.hardSuccessTime;
});

ScoreSchema.set('toObject', { getters: true });

module.exports = mongoose.model('Score', ScoreSchema);