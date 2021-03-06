import Unit from "../../Unit";
import Image from './images/01.jpg';

class Peasant extends Unit{
    constructor(parentType, location, worldLocation){
        super(parentType, location, worldLocation);
        this.subType = 'Peasant';
        this.icon = <i class="fas fa-male"></i>;
        this.status = 'idle';
        this.timer = 0;
        this.health = [25, 25];
        this.attack = 3;
        this.speed = 3;
        this.defense = 1;
        this.starMap = {
            felling: [0, 10],
            combat: [0, 10],
            mining: [0, 10],
            farming: [0, 10],
        }

        this.food = 1;
        this.shelter = 1;
        this.id = `${this.subType}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}`
        this.credit = 'Sasin Tipchai';
        this.getImage = this.getImage.bind(this);
    }

    getImage(){
        return Image;
    }
}

export default Peasant;