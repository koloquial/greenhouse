//tile types
import Resource from './TileType/Resource';
import Structure from './TileType/Structure';

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

                <div className='image-heading'>
                    <img 
                        src={tile.getImage()} 
                        style={{width: '100%', opacity: .7, margin: '0'}} 
                        title={`Image by ${tile.credit} at Pixabay`} 
                    />
                </div>
               
                <Resource tile={tile} />

                <Structure tile={tile} />
                
            </div>
        )
    }
}
export default ClassTile;

