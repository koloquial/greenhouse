import React, { useState, useEffect} from 'react';
import getNearby from '../Unit/Controller/functions/getNearby';

const Resource = ({ tile, view, world }) =>{
    const [nearby, setNearby] = useState();

    const isPeasantNearby = () => {
        for(let key in nearby){
            if(nearby[key].subType === 'Peasant'){
                return true
            }
        }
        return false;
    }
    
    useEffect(() => {
        setNearby(getNearby(world, view, tile))
    }, [tile])

    if(tile.type === 'Resource'){
        return (
            <div className={`${tile.parentType}-resource`}>
                <table>
                    <tr>
                        {Object.keys(tile.resource).map(key => {
                            return (
                                <td>
                                    <center>
                                        <div className={`${tile.parentType}-resourceItem`} onClick={() => {
                                            if(isPeasantNearby()){
                                                console.log('peasant near')
                                                
                                            }else{
                                                console.log('peasnt not near')
                                            }
                                        }}>
                                            <h4>
                                                {key[0].toUpperCase() + key.slice(1)}
                                            </h4>
                                            <br />
                                            <p>
                                                {tile.resource[key]}
                                            </p>
                                        </div>
                                    </center>
                                </td>
                            )
                        })}
                    </tr>
                </table>
            </div>    
        )
           
    }else{
        return (<></>)
    }
}

export default Resource;