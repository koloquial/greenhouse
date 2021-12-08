import Unit from "../../Unit";
import Image from './images/01.jpg';

class Peasant extends Unit{
    constructor(parentType, location){
        super(parentType, location);
        this.subType = 'Peasant';
        this.icon = 'P';
        this.health = [25, 25];

        this.credit = 'Sasin Tipchai';
        this.getImage = this.getImage.bind(this);

    }

    getImage(){
        return Image;
    }
}

export default Peasant;