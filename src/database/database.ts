import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('posts', 'root', '', {
  dialect:'mysql',
  dialectModule: require('mysql2'),
})

export default sequelize