import React, { useState, useEffect} from 'react';
import Clearing from '../../../../classes/Resource/Clearing';
import getNearby from '../Unit/Controller/functions/getNearby';

const Resource = ({ tile, setTile, view, world, player, update, setUpdate }) =>{
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
        const peasant = isPeasantNearby();
        player[target] = player[target] + reward;
        view.grid[tile.location[0]][tile.location[1]] = new Clearing(tile.parentType, [tile.location[0], tile.location[1]])
        setTarget();
        setTimer();
        setNearby();
        peasant.status = 'idle';
        setTile(peasant)
        setUpdate(update + 1);
    }
    
    useEffect(() => {
        setNearby(getNearby(world, view, tile))

    }, [tile])

    useEffect(() => {
        console.log('timer', timer)
        const peasant = isPeasantNearby();
        if(peasant){
            peasant.timer = timer;
        }
    }, [timer])


    if(tile.type === 'Resource'){
        return (
            <div className={`${tile.parentType}-resource`}>
                                <div style={{float: 'right'}}>
                                    {isPeasantNearby() ? (
                                        <button onClick={() => setTile(isPeasantNearby())}>{isPeasantNearby().name}</button>
                                    ) : (<></>)}
                                </div>
                <table>
                    <tr>
                        {Object.keys(tile.resource).map(key => {
                            return (
                                <td>
                                    <center>
                                        {isPeasantNearby() ? 
                                            (
                                                <div className={`${tile.parentType}-resourceItem`} onClick={() => {
                                                    if(target !== key){
                                                        setTarget(key);
                                                        tile.execute(tile.actions[key], setPlayerReward, setTimer);
                                                        isPeasantNearby().timer = timer;
                                                        isPeasantNearby().status = tile.status;
                                                    }
                                                   
                                                }}>
                                                    {tile.status === 'idle' ? (
                                                        <>
                                                            <h4>
                                                                {key[0].toUpperCase() + key.slice(1)}
                                                            </h4>
                                                            <br />
                                                            <p>
                                                                {tile.resource[key]}
                                                            </p>
                                                        </>
                                                    ) : (
                                                        <>
                                                        <h4>
                                                        {tile.status}ing...
                                                    </h4>
                                                    <br />
                                                    <p>
                                                        {timer}s
                                                    </p>
                                                    </>
                                                    )}
                                                    
                                                </div>
                                            ) 
                                            
                                            : 
                                            
                                            (
                                                <div className={`${tile.subType}-disabled`} >
                                                    {tile.status === 'idle' ? (
                                                        <>
                                                            <h4>
                                                                {key[0].toUpperCase() + key.slice(1)}
                                                            </h4>
                                                            <br />
                                                            <p>
                                                                {tile.resource[key]}
                                                            </p>
                                                        </>
                                                    ) : (
                                                        <>
                                                        <h4>
                                                        {tile.status}ing...
                                                    </h4>
                                                    <br />
                                                    <p>
                                                        {timer}s
                                                    </p>
                                                    </>
                                                    )}
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