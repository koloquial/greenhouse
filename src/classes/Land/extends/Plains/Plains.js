import Land from '../../Land'
import fillGrid from '../../functions/fillGrid';

class Plains extends Land{
    constructor(location){
        super(location);
        this.subType = 'Plains';
        this.size = 12;
        this.grid = fillGrid(this.size, this.subType);

    }

    
}

export default Plains;