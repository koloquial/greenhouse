import Resource from '../../Resource';
import Image from './images/01.jpg';

import ElmSeed from '../../Seed/ElmSeed';

class Elm extends Resource{
    constructor(parentType, location, parentID){
        super(parentType, location);
        this.subType = 'Elm';
        this.icon = <i class="fas fa-tree"></i>;
        this.id = `${parentID}`
        this.resource = {
            wood: Math.floor(Math.random() * 100) + 10,
        }
        this.bonus = this.getBonus()
        this.credit = 'Pezibear';
        this.actions = {wood: 'Fell'};

        this.getImage = this.getImage.bind(this);
        this.getBonus = this.getBonus.bind(this);
    }

    getImage(){
        return Image;
    }

    getBonus(){
        let random = Math.floor(Math.random() * 3) + 1;
        let seed = new ElmSeed(random);
        return {seeds: seed};
    }
}

export default Elm;