import Seed from "../../Seed";

class ElmSeed extends Seed{
    constructor(quantity){
        super(quantity);
        this.subType = 'Elm Seed';
        this.id = `${this.subType}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}`
    }
}

export default ElmSeed;