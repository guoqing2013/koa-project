import Sequelize from 'sequelize'
import sequelize from '../../sequelize'

const Category = sequelize.define('category', {
  category_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // String 是 请求来源（需调用方自定义标识：OPEN_XXXX）
  source: {
    type: Sequelize.STRING
  },
  // Number 是 父级节点id（默认0，表示第一层分类）
  parent_id: {
    type: Sequelize.DataTypes.INTEGER(1)
  },
  // String 是 类目名称（分类名称字符数在1-20之间）
  category_name: {
    type: Sequelize.STRING
  }
}, {
})

sequelize.sync()

export default Category
