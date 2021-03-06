import Structure from '../../Structure';
import Image from './images/01.jpg';

class Garden extends Structure{
    constructor(parentType, location, worldLocation){
        super(parentType, location, worldLocation);
        this.subType = 'Garden';
        this.parentType = parentType;
        this.icon = <i class="fas fa-seedling"></i>;
        this.credit = 'ejaugsburg'
        this.grid = this.fillGrid;
        this.food = 6;
        this.fillGrid = this.fillGrid.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    getImage(){
        return Image;
    }

    fillGrid(){
        let array = [];
        for(let i = 0; i < this.food; i++){
            for(let j = 0; j < this.food; i++){
                array.push({soil: ''});
            }
        }
        return array;
    }
}

export default Garden;