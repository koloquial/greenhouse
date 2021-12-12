import Unit from './types/Unit'
import Structure from './types/Structure';
import Resource from './types/Resource';
import Companion from './types/Companion';

const Info = ({ tile, setFlip }) => {
    console.log('[Info Tile]:', tile)
    switch(tile.type){
        case 'Unit':
            console.log('return unit')
            return <Unit tile={tile} setFlip={setFlip} />
        case 'Structure':
            console.log('return structure')
            return <Structure tile={tile} setFlip={setFlip} />
        case 'Resource':
            console.log('return resource')
            return <Resource tile={tile} setFlip={setFlip} />
        case 'Companion':
            console.log('return companion')
            return <Companion tile={tile} setFlip={setFlip} />
        default: 
            return <></>
    }
}

export default Info;

