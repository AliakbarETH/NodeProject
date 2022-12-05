const express = require('express') ;
const router  = express.Router() ;
const {
    getAllItems,
    createTasks, 
    getTasks, 
    updateTasks, 
    deleteTasks,
    
} = require('../controller/tasks')

router.route('/').get(getAllItems).post(createTasks) ;
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks);

module.exports = router;