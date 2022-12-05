const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error') ;

const getAllItems = asyncWrapper (async (req, res) => {
    
        const task = await Task.find({})
        res.status(200).json({task})

})

const createTasks = asyncWrapper(
    async (req, res) =>{
        
            const task = await Task.create(req.body)
            res.status(201).json({task}) ;
})

const getTasks = asyncWrapper(async (req, res) =>{
    

        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})

        if(!task){
            return next(createCustomError(`no task with id ${taskID}`, 404))
            
        }
        console.log()

        
        res.status(200).json({task});   
})


const deleteTasks = asyncWrapper(
    async (req, res) =>{
    
            const {id:taskID} = req.params
            const task = await Task.findOneAndDelete({_id:taskID})
            
             if(!task){
                return next(createCustomError(`no task with id ${taskID}`, 404))
             }
    
            res.status(200).json({task})
        
    }

) 

const updateTasks = asyncWrapper(
    async (req, res) =>
    {
        
            const {id:taskID} = req.params
    
            const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
                new:true,
                runValidators:true
            })
    
    
            if(!task){
                return res.status(404).json({msg:`no task with id ${taskID}`})
              }
            res.status(200).json({task}) 
    
    }) 

module.exports = {
    getAllItems,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks,
    

}