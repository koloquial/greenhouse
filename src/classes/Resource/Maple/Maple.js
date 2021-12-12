import Resource from '../../Resource';
import Image from './images/01.jpg'

class Maple extends Resource{
    constructor(parentType, location){
        super(parentType, location);
        this.subType = 'Maple';
        this.icon = <i class="fas fa-tree"></i>;
        this.id = `${this.subType}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}`
        this.resource = {wood: Math.floor(Math.random() * 50) + 10}
        this.credit = 'Jimmy Lau';
        this.getImage = this.getImage.bind(this);
    }

    getImage(){
        return Image;
    } 
}

export default Maple;