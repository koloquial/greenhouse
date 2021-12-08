import getName from "./functions/getName";

class Unit{
    constructor(parentType, location){
        this.type = 'Unit';
        this.parentType = parentType;
        this.location = location;
        this.name = getName('Male')
        this.steps = 0;
    }
}

export default Unit;