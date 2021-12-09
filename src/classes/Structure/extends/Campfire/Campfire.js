import Structure from '../../Structure';

class Campfire extends Structure{
    constructor(parentType, location, worldLocation){
        super(parentType, location, worldLocation);
        this.subType = 'Campfire';
        this.parentType = parentType;
        this.icon = <i class="fas fa-fire"></i>;
        this.actions = [this.hirePeasant];
        this.health = [100, 100];
        
        this.hirePeasant = this.hirePeasant.bind(this);
    }

    hirePeasant(){
        console.log('hire peasant')
    }


}

export default Campfire;