import Sequelize from 'sequelize';
import sequelize from '../../sequelize';

const User = sequelize.define('admin_user', {
    username:{
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    }
});

sequelize.sync();

export default User;