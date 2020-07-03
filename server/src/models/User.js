const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type:String,
    required: true,
    select: false
  }
});

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);  
  next();
});

UserSchema.methods.comparePassword = function(candidate) {
  return bcrypt.compareSync(candidate, this.password);
};

module.exports = mongoose.model('User', UserSchema);