import Land from '../../Land'
import fillGrid from '../../functions/fillGrid';

class Forest extends Land{
    constructor(location){
        super(location);
        this.subType = 'Forest';
        this.size = 12;
        this.grid = fillGrid(this.size, this.subType);

    }
}

export default Forest;