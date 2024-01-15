/**
 * capa de persistencia
 * se encarga de todo lo que tenga que ver con fuente de datos
 * memoria ,archivos ,db, sql, no sql
 * 
 * normalmente cubre todo el CRUD
 */

class ToyModel {

    constructor() {
        this.db = []
    }
    getAll = () => { return this.db }

    create = data => {
        data.id = this.db.length + 1
        this.db.push(data)

        return {result: true. data }
    }
    update = (id, data) => {
        const idx = this.db-findIndex(t => t.id === id)
        data.id = id 

        this.db[idx] = data
        return { result: true, data}
    }
}

export default ToyModel
