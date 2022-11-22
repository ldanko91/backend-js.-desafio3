const express = require("express");
// import moment from "moment";
const Contenedor = require('./contenedor.js');

const app = express();
const nuevoProducto = new Contenedor("./productos.txt");
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Server activado en puerto: ${PORT}`);
});

server.on("error", (err) => {
  console.log(`Error: ${err.message}`);
});

//rutas
app.get("/", (req, res) => {
  console.log(`Nueva request del IP ${req.ip}`);
  res.send("Este es el home del server");
});

app.get("/productos", async (req, res) => {
  try {
    const productos = await nuevoProducto.getAll();
    console.log(productos);
    res.send(productos);
  } catch (error) {
    console.log(error);
  }
});

app.get("/productoRandom", async (req, res) => {
  try {
    const productos = await nuevoProducto.getAll();
    const randomId = Math.random * productos.length - 1;
    const productoRandom = nuevoProducto.getByID(randomId);
    console.log(productos)
    res.send(productoRandom);
  } catch (error) {
    console.log(error);
  }
});

// app.get('/productos', (req, res) => {
//     const productos = nuevoProducto.getAll();
//     res.send(productos)
// })
