import Structure from '../../Structure';
import Image from './images/01.jpg';

class Campfire extends Structure{
    constructor(parentType, location, worldLocation){
        super(parentType, location, worldLocation);
        this.subType = 'Campfire';
        this.parentType = parentType;
        this.icon = <i class="fas fa-fire"></i>;
        this.actions = [this.hirePeasant];
        this.health = [100, 100];
        this.credit = 'Pexels';
        
        this.hirePeasant = this.hirePeasant.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    hirePeasant(){
        console.log('hire peasant')
    }

    getImage(){
        return Image;
    }


}

export default Campfire;