import Companion from '../../Companion';
import Image from './images/01.jpg'

class Nimbi extends Companion{
    constructor(parentType, location, worldLocation){
        super(parentType, location, worldLocation);
        this.subType = 'Nimbi';
        this.health = [];
        this.attack = 0;
        this.defense = 0;
        this.ability = '';
        this.sex = 'Male';
        this.speed = 0;
        this.moves = ['Bite'];
        this.age = new Date();
        this.icon = <i class="fas fa-paw"></i>;
        this.credit = 'Rebecca Scholz';
        this.companionNumber = 1;
        this.health = [20, 20];
        this.getImage = this.getImage.bind(this);
    }

    getImage(){
        return Image;
    }
}

export default Nimbi;