const Contenedor = require('./desafio-3/contenedor.js')

                                                                                                                                                    
const item1 = {                                                                                                                                                    
      title: 'Tanque 500 Tricapa',                                                                                                                                 
      price: 15600,                                                                                                                                     
      thumbnail: './img/500tcp.png',                                     
      id: 1                                                                                                                                              
    }

const item2 = {                                                                                                                                                    
      title: 'Vanitory Maral 60',                                                                                                                              
      price: 21000,                                                                                                                                     
      thumbnail: './img/maral60.jpg',                                          
      id: 2                                                                                                                                              
    }      

const item3 = {                                                                                                                                                    
      title: 'Vanitory standard 50',                                                                                                                          
      price: 17000,                                                                                                                                     
      thumbnail: './img/std50.jpg',                                   
      id: 3                                                                                                                                              
    }                                                                                                                                                    


async function main () {
    const contenedor = new Contenedor('./productos.txt')

    let datos = await contenedor.getAll()
    console.log(datos)

    let id1 = await contenedor.save(item1)
    console.log(id1)

    let id2 = await contenedor.save(item2)
    console.log(id2)

    let datos2 = await contenedor.getAll()
    console.log(datos2)

    let datos3 = await contenedor.getByID(2)
    console.log(datos3)

    // let datos4 = await contenedor.deleteByID(1)
    // console.log(datos4)

    let id3 = await contenedor.save(item3)
    console.log(id3)

    let datos5 = await contenedor.getAll()
    console.log(datos5)

    // let wipe = await contenedor.deleteAll()
}

main ()