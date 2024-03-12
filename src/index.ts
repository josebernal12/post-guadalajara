import express from 'express'
import 'dotenv/config'
import userRouter from './routes/routes'
import sequelize from './database/database'
import productRouter from './routes/products'
const app = express()
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.listen(8080, () => {
  sequelize.authenticate()
  console.log('Connection has been established successfully.');
  console.log('server listening to port 8080')
})