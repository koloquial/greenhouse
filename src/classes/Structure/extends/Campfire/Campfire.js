import Structure from '../../Structure';
import Image from './images/01.jpg';
import Peasant from '../../../Unit/Peasant';

class Campfire extends Structure{
    constructor(parentType, location, worldLocation){
        super(parentType, location, worldLocation);
        this.subType = 'Campfire';
        this.parentType = parentType;
        this.icon = <i class="fas fa-fire"></i>;
        this.actions = ['Hire Peasant'];
        this.health = [100, 100];
        this.credit = 'Pexels';
        
        this.hirePeasant = this.hirePeasant.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    hirePeasant(view, player){
        console.log('hire peasant');
        console.log('VIEW', view);
        let checkX, checkY;

        if(player.shelter <= 1 && player.food <= 1){
            return 'Failed.'
        }

        //check north
        checkX = this.location[0] - 1;
        checkY = this.location[1];
        try{
            if(view.grid[checkX][checkY].subType === 'Clearing'){
                let result = new Peasant(this.parentType, [checkX, checkY], this.worldLocation);
                console.log('RESULT', result);
                view.grid[checkX][checkY] = result;
                player.addUnit(result);
                return [checkX, checkY];
            }
        }catch(e){console.log('out of bounds north', e)}

        //check south
        checkX = this.location[0] + 1;
        checkY = this.location[1];
        try{
            if(view.grid[checkX][checkY].subType === 'Clearing'){
                let result = new Peasant(this.parentType, [checkX, checkY], this.worldLocation);
                console.log('RESULT', result);
                view.grid[checkX][checkY] = result;
                player.addUnit(result);
                return [checkX, checkY];
            }
        }catch(e){console.log('out of bounds south', e)}
        
        //check east
        checkX = this.location[0];
        checkY = this.location[1] + 1;
        try{
            if(view.grid[checkX][checkY].subType === 'Clearing'){
                let result = new Peasant(this.parentType, [checkX, checkY], this.worldLocation);
                console.log('RESULT', result);
                view.grid[checkX][checkY] = result;
                player.addUnit(result);
                return [checkX, checkY];
            }
        }catch(e){console.log('out of bounds east', e)}

        //check west
        checkX = this.location[0];
        checkY = this.location[1] - 1;
        try{
            if(view.grid[checkX][checkY].subType === 'Clearing'){
                let result = new Peasant(this.parentType, [checkX, checkY], this.worldLocation);
                console.log('RESULT', result);
                view.grid[checkX][checkY] = result;
                player.addUnit(result);
                return [checkX, checkY];
            }
        }catch(e){console.log('out of bounds west', e)}

        return 'Failed';
    }

    getAction(action, view, player){
        switch(action){
            case 'Hire Peasant':
                return this.hirePeasant(view, player)
            default: break;
        }
    }

    getImage(){
        return Image;
    }


}

export default Campfire;