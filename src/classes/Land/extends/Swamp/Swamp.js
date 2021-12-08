import Land from '../../Land'
import fillGrid from '../../functions/fillGrid';

class Swamp extends Land{
    constructor(location){
        super(location);
        this.subType = 'Swamp';
        this.size = 12;
        this.grid = fillGrid(this.size, this.subType);

    }

    
}

export default Swamp;