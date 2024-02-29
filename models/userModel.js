const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  login: {
    type: String,
    required: true,
    trim: true,
  },
  senha: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters'],
    trim: true,
    validate: {
      validator: function (v) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid password!`,
    },
  },
  active: {
    type: Boolean,
    default: true,
  },
  roles: [
    {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
