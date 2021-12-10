import React, { useState, useEffect} from 'react';
import Clearing from '../../../../classes/Resource/Clearing';
import getNearby from '../Unit/Controller/functions/getNearby';

const Resource = ({ tile, view, world, player, update, setUpdate }) =>{
    const [nearby, setNearby] = useState();
    const [timer, setTimer] = useState();
    const [target, setTarget] = useState();

    const isPeasantNearby = () => {
        for(let key in nearby){
            if(nearby[key].subType === 'Peasant'){
                return nearby[key];
            }
        }
        return false;
    }

    const setPlayerReward = (reward) => {
        player[target] = player[target] + reward;
        view.grid[tile.location[0]][tile.location[1]] = new Clearing(tile.parentType, [tile.location[0], tile.location[1]])
        setUpdate(update + 1);
    }
    
    useEffect(() => {
        setNearby(getNearby(world, view, tile))
    }, [tile])

    useEffect(() => {
        console.log('timer', timer)
    }, [timer])


    if(tile.type === 'Resource'){
        return (
            <div className={`${tile.parentType}-resource`}>
                <table>
                    <tr>
                        {Object.keys(tile.resource).map(key => {
                            return (
                                <td>
                                    <center>
                                        {isPeasantNearby() ? 
                                            (
                                                <div className={`${tile.parentType}-resourceItem`} onClick={() => {
                                                    setTarget(key);
                                                    tile.execute(tile.actions[key], setPlayerReward, setTimer);
                                                }}>
                                                    <h4>
                                                        {key[0].toUpperCase() + key.slice(1)}
                                                    </h4>
                                                    <br />
                                                    <p>
                                                        {tile.resource[key]}
                                                    </p>
                                                </div>
                                            ) 
                                            
                                            : 
                                            
                                            (
                                                <div className={`${tile.subType}-disabled`} >
                                                    <h4>
                                                        {key[0].toUpperCase() + key.slice(1)}
                                                    </h4>
                                                    <br />
                                                    <p>
                                                        {tile.resource[key]}
                                                    </p>
                                                </div>
                                            )
                                        }
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