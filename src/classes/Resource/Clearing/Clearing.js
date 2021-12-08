import Resource from '../../Resource';

class Clearing extends Resource{
    constructor(parentType){
        super(parentType);
        this.subType = 'Clearing';
        this.icon = ' ';
    }
}

export default Clearing;