import Resource from '../../Resource';

class Clearing extends Resource{
    constructor(parentType, location){
        super(parentType, location);
        this.subType = 'Clearing';
        this.icon = ' ';
    }
}

export default Clearing;