const fs = require('fs');

class Contenedor {
    constructor(ruta){
        this.ruta = ruta
    }
    
    async save(obj){
        const Listado = await this.getAll()
        let nuevoID
        
        if (Listado.length == 0) {
            nuevoID = 1
        } else {
            nuevoID = Listado[Listado.length - 1].id + 1
        }

        const nuevoObjID = {...obj, id: nuevoID}

        Listado.push(nuevoObjID)

        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(Listado, null, 2))
            return nuevoID

        } catch (error){
            throw new Error(`Error al guardar el objeto: ${error}`)
        }

    }

    async getAll(){
        try {
            const data = await fs.promises.readFile(this.ruta, 'utf8')
            return JSON.parse(data)

        } catch (error){
            return []
        }
    }

    async getByID (id) {
        try {
            const Listado = await this.getAll()
            return Listado.find(item => item.id === id)   
        } catch (error) {
            
        }
    }

    async deleteByID (id) {
        const Listado = await this.getAll()

        const nuevoListado = Listado.filter(item => item.id != id)
        
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(nuevoListado, null, 2))

        } catch (error){
            
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))

        } catch (error){
            
        }
    }
}

module.exports = Contenedor