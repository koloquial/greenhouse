import Structure from '../../Structure';

class Tent extends Structure{
    constructor(parentType, location, worldLocation){
        super(parentType, location, worldLocation);
        this.subType = 'Tent';
        this.parentType = parentType;
        this.icon = <i class="fas fa-campground"></i>;

        this.shelter = 3;
    }
}

export default Tent;