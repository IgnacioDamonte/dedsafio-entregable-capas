/* la capa de servicios consume la capa de modelos*/
/**
 * SE ENCARGA DE LOS ASPECTOS O FUNCIONALIDADES DEL NEGOCIA 
 * EJ APAGAR UN JUGUETE NO ES UNA FUNCION DE db
 * es propio del negocio
 */

import ToyModel from "../models/toy.model,js";

class ToyServices {

    constructor() {
        this.toyModel = new ToyModel()
    }

    getAll = () => { return this.toyModel.getAll()}

    create = data => {
        return this.toyModel.create(data)
    }

    turnOff = id => {
        const result = this.toyModel.update(id, { turn: false})

        return result
    }
}

export default ToyServices