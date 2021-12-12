
import Mountain from './images/mountain.jpg';
import Resource from '../../Resource';
import Forest from './images/forest.jpg';
import Plains from './images/plains.jpg';
import Swamp from './images/swamp.jpg';
import Island from './images/island.jpg';

class Clearing extends Resource{
    constructor(parentType, location){
        super(parentType, location);
        this.subType = 'Clearing';
        this.icon = ' ';
        this.credit = '';
        this.resource = {};
        this.options = {build: ['Campfire', 'Tent', 'Garden']}
        this.id = `${this.subType}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}`
        this.getImage = this.getImage.bind(this);
    }
    
    getImage(){
        switch(this.parentType){
            case 'Forest':
                this.credit = 'Albrecht Fietz';
                return Forest;
            case 'Plains':
                this.credit =  'Henryk Niestrój';
                return Plains;
            case 'Swamp':
                this.credit = 'Bruno Müller';
                return Swamp;
            case 'Mountain':
                this.credit = 'Pete Linforth';
                return Mountain;
            case 'Island':
                this.credit = 'Frank Winkler';
                return Island;
            default:
                return Forest;
        }
    }
}

export default Clearing;