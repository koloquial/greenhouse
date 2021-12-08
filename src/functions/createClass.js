//Land
import Forest from '../classes/Land/extends/Forest';
import Plain from '../classes/Land/extends/Plain';

//Resources
import Elm from '../classes/Resource/Elm';
import Maple from '../classes/Resource/Maple';

const createClass = (subType) => {
    let random;
    switch(subType){
        case 'Land':
            random = Math.floor(Math.random() * 2);
            switch(random){
                case 0:
                    return new Forest();
                case 1:
                    return new Plain();
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

        case 'Plain':
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