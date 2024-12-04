// const Budget = require('../models/Budget')

module.exports = {
    getBudget: async (req,res)=>{
        console.log(req.user)
        try{
            // const budgetItems = await Budget.find({userId:req.user.id})
        //     res.render('budget.ejs', {total: totalBudget, budgetUnder: surplus, budgetOver: defecit, user: req.user})
            console.log(req.user);
            res.render('budget.ejs');
        }
            
        catch(err){
            console.log(err);
        }
    }
    // createBudget: async (req, res)=>{
    //     try{
    //         await Budget.create({todo: req.body.budgetItem, amount: req.body.cost, userId: req.user.id})
    //         console.log('Budget Item has been added!')
    //         res.redirect('/budget')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteBudget: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    
}    