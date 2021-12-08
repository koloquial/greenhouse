import Resource from '../../Resource';

class Maple extends Resource{
    constructor(parentType){
        super(parentType);
        this.subType = 'Maple';
        this.icon = '*';
        this.parentType = parentType;
        
    }
}

export default Maple;