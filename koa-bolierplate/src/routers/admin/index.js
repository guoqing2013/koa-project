import koaRouter from 'koa-router'
import user from '../../controllers/admin/user.controller'
const admin = koaRouter();

// admin.prefix('/admin');

admin.post('/register', user.register);
admin.post('/login', user.login);

export default admin;
