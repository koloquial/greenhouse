import Resource from '../../Resource';
import Image from './images/01.jpg';

class Elm extends Resource{
    constructor(parentType, location){
        super(parentType, location);
        this.subType = 'Elm';
        this.icon = <i class="fas fa-tree"></i>;
        this.resource = {
            wood: Math.floor(Math.random() * 100) + 10
        }
        this.credit = 'Pezibear';
        this.actions = {wood: 'Fell'};

        this.getImage = this.getImage.bind(this);
    }

    getImage(){
        return Image;
    }
}

export default Elm;