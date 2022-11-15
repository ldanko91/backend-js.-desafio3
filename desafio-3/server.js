import express from 'express';

const app = express();

import Contenedor from './contenedor'

async function main () {
    const contenedor = new Contenedor('./productos.txt')

    let datos = await contenedor.getAll()
    console.log(datos)
}

main()

app.get('/api/productos', (req, res) => {
    console.log(`Nueva request de: ${req.ip}`)

    res.json({
        status: 'Ok',
        data: {
            productos: datos,
        }
    })
})

app.listen(8080, () => {
    console.log('Server listening http://127.0.0.1:8080')
})