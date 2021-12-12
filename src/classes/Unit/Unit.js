import getName from "./functions/getName";

class Unit{
    constructor(parentType, location, worldLocation){
        this.type = 'Unit';
        this.parentType = parentType;
        this.location = location;
        this.name = getName('Male')
        this.steps = 0;
        this.worldLocation = worldLocation;
        this.inventory = [];
        this.options = ['Stats', 'Inventory'];
    }
}

export default Unit;