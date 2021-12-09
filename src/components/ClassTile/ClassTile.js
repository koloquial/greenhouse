//tile types
import Resource from './TileType/Resource';

const ClassTile = ({ tile }) => {
    if(tile === undefined){
        return <></>

    }else{
        return (
            <div className='container'>
                <div className={`${tile.parentType}-heading`}>
                    {tile.subType}
                    <div style={{float: 'right'}}>
                        <p className={`${tile.subType}-icon`}>{tile.icon}</p>
                    </div> 
                </div>
                
                <Resource tile={tile} />
                
            </div>
        )
    }
}
export default ClassTile;

