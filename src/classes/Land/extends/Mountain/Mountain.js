import Land from '../../Land'
import fillGrid from '../../functions/fillGrid';

class Mountain extends Land{
    constructor(){
        super();
        this.subType = 'Mountain';
        this.size = 12;
        this.grid = fillGrid(this.size, this.subType);

    }

    
}

export default Mountain;