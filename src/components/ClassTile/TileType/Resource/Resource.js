import React, { useState, useEffect} from 'react';
import Clearing from '../../../../classes/Resource/Clearing';
import getNearby from '../Unit/Controller/functions/getNearby';

import Notification from '../../../Notification';
import notify from '../../../Notification/functions/notify';

const Resource = ({ tile, setTile, view, world, player, update, setUpdate, setDirection }) =>{
    const [nearby, setNearby] = useState();
    const [timer, setTimer] = useState();
    const [target, setTarget] = useState();

    const [alertMessage, setAlertMessage] = useState('');
    const [alertTime, setAlertTime] = useState(0);
    const [alertType, setAlertType] = useState('');

    const isPeasantNearby = () => {
        for(let key in nearby){
            if(nearby[key].subType === 'Peasant'){
                return nearby[key];
            }
        }
        return false;
    }

    const setPlayerReward = (reward, res) => {

        const peasant = isPeasantNearby();
        peasant.status = 'idle';

        player[res] = player[res] + reward;
        notify(`+${reward} ${res}.`, 'success', 1.5 * 1000);

        let clearing = new Clearing(tile.parentType, [tile.location[0], tile.location[1]]);
        view.grid[tile.location[0]][tile.location[1]] = clearing;
        setTarget();
        setTimer();
        // setNearby();
        setUpdate(update + 1);
    }
    
    useEffect(() => {
        console.log('NEARBY THIS', tile)
        let near = getNearby(world, view, tile);
        console.log('NEAR', near)
        setNearby(near)

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
                                            <>
                                                {/*peasant nearby, idle*/}
                                                {tile.status === 'idle' ? 
                                                    <div className={`${tile.parentType}-resourceItem`} onClick={() => {
                                                            if(tile.status === 'idle'){
                                                                setTarget(key);
                                                                let time = tile.execute(tile.actions[key], setPlayerReward, setTimer);
                                                                notify(`${tile.actions[key]}ing...`, 'info', time * 1000)
                                                                isPeasantNearby().timer = timer;
                                                                isPeasantNearby().status = tile.status;
                                                            }
                                                        }}>
                                                            <h4>{key[0].toUpperCase() + key.slice(1)}</h4>
                                                            <br /><p>{tile.resource[key]}</p>
                                                    </div>
                                                : <>
                                                    {/*peasant nearby, not idle*/}
                                                    {timer !== undefined ?
                                                        <>
                                                            <h4>{tile.actions[key]}ing...</h4>
                                                            <br /><p>{timer}</p>
                                                        </> : <></>
                                                    }
                                                   
                                                </>   
                                                }
                                            </>
                                            : <>
                                                {/*peasant not near*/}
                                                {tile.status === 'idle' ?
                                                    <>{/*peasant not near, idle*/}</> 
                                                    : <>{/*peasant not near, not idle*/}</>
                                                }
                                            </>  
                                        }
                                    </center>
                                </td>
                            )
                        })}
                    </tr>
                </table>
                
                        <Notification />
            </div>    
        )
           
    }else{
        return (<></>)
    }
}

export default Resource;