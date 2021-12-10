//Land
import Forest from '../classes/Land/extends/Forest';
import Plains from '../classes/Land/extends/Plains';
import Swamp from '../classes/Land/extends/Swamp';
import Mountain from '../classes/Land/extends/Mountain';
import Island from '../classes/Land/extends/Island';

//Resources
import Elm from '../classes/Resource/Elm';
import Maple from '../classes/Resource/Maple';

const createClass = (subType, location, worldLocation) => {
    let random;
    switch(subType){
        case 'Land':
            random = Math.floor(Math.random() * 5);
            switch(random){
                case 0:
                    return new Forest(location);
                case 1:
                    return new Plains(location);
                case 2:
                    return new Swamp(location);
                case 3:
                    return new Mountain(location);
                case 4:
                    return new Island(location);
                default:
                    return new Forest(location);
            }
        
        case 'Forest':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType, location, worldLocation);
                case 1:
                    return new Maple(subType, location, worldLocation);
                default:
                    return new Maple(subType, location, worldLocation);
            }

        case 'Plains':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType, location, worldLocation);
                case 1:
                    return new Maple(subType, location, worldLocation);
                default:
                    return new Maple(subType, location, worldLocation);
            }

        case 'Swamp':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType, location, worldLocation);
                case 1:
                    return new Maple(subType, location, worldLocation);
                default:
                    return new Maple(subType, location, worldLocation);
            }

        case 'Mountain':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType, location, worldLocation);
                case 1:
                    return new Maple(subType, location, worldLocation);
                default:
                    return new Maple(subType, location, worldLocation);
            }

        case 'Island':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType, location, worldLocation);
                case 1:
                    return new Maple(subType, location, worldLocation);
                default:
                    return new Maple(subType, location, worldLocation);
            }

        default:
            return;
    }
}

export default createClass;