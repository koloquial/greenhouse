//Land
import Forest from '../classes/Land/extends/Forest';
import Plains from '../classes/Land/extends/Plains';
import Swamp from '../classes/Land/extends/Swamp';
import Mountain from '../classes/Land/extends/Mountain';
import Island from '../classes/Land/extends/Island';

//Resources
import Elm from '../classes/Resource/Elm';
import Maple from '../classes/Resource/Maple';

const createClass = (subType) => {
    let random;
    switch(subType){
        case 'Land':
            random = Math.floor(Math.random() * 5);
            switch(random){
                case 0:
                    return new Forest();
                case 1:
                    return new Plains();
                case 2:
                    return new Swamp();
                case 3:
                    return new Mountain();
                case 4:
                    return new Island();
                default:
                    return new Forest();
            }
        
        case 'Forest':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType);
                case 1:
                    return new Maple(subType);
                default:
                    return new Maple(subType);
            }

        case 'Plains':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType);
                case 1:
                    return new Maple(subType);
                default:
                    return new Maple(subType);
            }

        case 'Swamp':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType);
                case 1:
                    return new Maple(subType);
                default:
                    return new Maple(subType);
            }

        case 'Mountain':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType);
                case 1:
                    return new Maple(subType);
                default:
                    return new Maple(subType);
            }

        case 'Island':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Elm(subType);
                case 1:
                    return new Maple(subType);
                default:
                    return new Maple(subType);
            }

        default:
            return;
    }
}

export default createClass;