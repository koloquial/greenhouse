import Unit from "../../Unit";
import Image from './images/01.jpg';

class Peasant extends Unit{
    constructor(parentType, location){
        super(parentType, location);
        this.subType = 'Peasant';
        this.icon = 'P';

        this.health = [25, 25];
        this.attack = 3;
        this.speed = 3;
        this.defense = 1;
        this.starMap = {
            felling: [0, 10],
            handToHand: [0, 10],
            mining: [0, 10],
            farming: [0, 10],
        }

        this.credit = 'Sasin Tipchai';
        this.getImage = this.getImage.bind(this);

    }

    getImage(){
        return Image;
    }
}

export default Peasant;