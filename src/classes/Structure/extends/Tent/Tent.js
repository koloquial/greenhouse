import Structure from '../../Structure';

class Tent extends Structure{
    constructor(parentType, location){
        super(parentType, location);
        this.subType = 'Tent';
        this.parentType = parentType;
        this.icon = '#';
    }
}

export default Tent;