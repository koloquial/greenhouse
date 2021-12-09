import Structure from '../../Structure';
import Image from './images/01.jpg';

class Tent extends Structure{
    constructor(parentType, location, worldLocation){
        super(parentType, location, worldLocation);
        this.subType = 'Tent';
        this.parentType = parentType;
        this.icon = <i class="fas fa-campground"></i>;
        this.credit = 'StockSnap';
        this.shelter = 3;
        this.getImage = this.getImage.bind(this);
    }
    getImage(){
        return Image;
    }
}

export default Tent;