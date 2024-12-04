const mongoose = require('mongoose')

const BudgetSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  amountAllotted: {
    type: Number,
    required: true,
  },
  amountSpent: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Budget', BudgetSchema)
