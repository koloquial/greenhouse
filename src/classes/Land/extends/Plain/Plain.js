import Land from '../../Land'
import fillGrid from '../../functions/fillGrid';

class Plain extends Land{
    constructor(){
        super();
        this.subType = 'Plain';
        this.size = 12;
        this.grid = fillGrid(this.size, this.subType);

    }

    
}

export default Plain;