import Land from '../../Land'
import fillGrid from '../../functions/fillGrid';

class Forest extends Land{
    constructor(location){
        super(location);
        this.subType = 'Forest';
        this.size = 12;
        this.id = `${this.subType}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}`
        this.grid = fillGrid(this.size, this.subType, this.id);

    }
}

export default Forest;