import Unit from './InfoTypes/Unit'
import Structure from './InfoTypes/Structure';
import Resource from './InfoTypes/Resource';

const Info = ({ tile, setFlip }) => {
    switch(tile.type){
        case 'Unit':
            return <Unit tile={tile} setFlip={setFlip} />
        case 'Structure':
            return <Structure tile={tile} setFlip={setFlip} />
        case 'Resource':
            return <Resource tile={tile} setFlip={setFlip} />
        default: 
            return <></>
    }
}

export default Info;

