import Structure from '../../Structure';

class Garden extends Structure{
    constructor(parentType, location){
        super(parentType, location);
        this.subType = 'Garden';
        this.parentType = parentType;
        this.icon = '%';
    }
}

export default Garden;