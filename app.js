import express from "express"
import cors from 'cors'
import db from "./database/db.js"
import productRoutes from './routes/routes.js'

const port = 8000;
const app = express()

app.use(cors())
app.use(express.json())
app.use('/products', productRoutes)


try {
    await db.authenticate()
    console.log('Conexion exitosa a la db')
} catch (error) {
    console.log(`El error es: ${error}`)
}

app.get('/', (req,res)=>{
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})
