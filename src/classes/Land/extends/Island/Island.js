import Land from '../../Land'
import fillGrid from '../../functions/fillGrid';

class Island extends Land{
    constructor(){
        super();
        this.subType = 'Island';
        this.size = 12;
        this.grid = fillGrid(this.size, this.subType);

    }

    
}

export default Island;