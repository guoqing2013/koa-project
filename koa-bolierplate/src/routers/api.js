// import api from '../controllers/todolist.js'
import user from '../controllers/user.js'
import koaRouter from 'koa-router'
const router = koaRouter()

// router.get('/todolist/:id', api.getTodolist)
// router.post('/todolist', api.createTodolist)
// router.delete('/todolist/:userId/:id', api.removeTodolist)
// router.put('/todolist/:userId/:id/:status', api.updateTodolist)

router.post('/register', user.register)
router.post('/login', user.login)

export default router
