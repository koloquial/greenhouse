import Resource from '../../Resource';

class Elm extends Resource{
    constructor(parentType){
        super(parentType);
        this.subType = 'Elm';
        this.icon = '*';
        this.parentType = parentType;
        
    }
}

export default Elm;