// require mongoose
const mongoose = require('mongoose')

// set up songpost schema with new mongoose schema
const songSchema = new mongoose.Schema({
  // include properties: title, artist (required)
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ownerEmail: {
    type: String,
    ref: 'User',
    required: true
  }
}, { // require timestamps
  timestamps: true
})

// export songpost model
module.exports = mongoose.model('Song', songSchema)
