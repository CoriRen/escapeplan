const express = require('express')
const router = express.Router()
const budgetController = require('../controllers/budget') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', budgetController.getBudget)

// router.post('/createBudget', budgetController.createBudget)

// router.put('/markComplete', budgetController.markComplete)

// router.put('/markIncomplete', budgetController.markIncomplete)

// router.delete('/deleteBudget', budgetController.deleteBudget)

module.exports = router;