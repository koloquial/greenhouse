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
        console.log('REWARD:', reward)
        console.log('RES', res)
        
        const peasant = isPeasantNearby();
        
        console.log('---------------------')


        player[res] = player[res] + reward;

        console.log('TILE', tile)
        console.log('VIEW', view)
        // setAlertMessage(`+${reward} ${target}.`);
        // setAlertType('success');
        // setAlertTime(1.5 * 1000);
        notify(`+${reward} ${res}.`, 'success', 1.5 * 1000)
        let clearing = new Clearing(tile.parentType, [tile.location[0], tile.location[1]]);
        view.grid[tile.location[0]][tile.location[1]] = clearing;
        // world.grid[]
        console.log('---------------------')
        
        setTarget();
        setTimer();
        setNearby();
        peasant.status = 'idle';
        //if view === tile view then set tile, else dont set tile
            // setTile(clearing);
        

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
                                            (
                                                <div className={`${tile.parentType}-resourceItem`} onClick={() => {
                                                    if(target !== key){
                                                        console.log('KEY HERE', key);
                                                        setTarget(key);
                                                        
                                                        let time = tile.execute(tile.actions[key], setPlayerReward, setTimer);
                                                        
                                                        // setAlertMessage(`${key}ing...`);
                                                        // setAlertType('info');
                                                        // setAlertTime(time * 1000);

                                                        notify(`${tile.actions[key]}ing...`, 'info', time * 1000)
                                                        isPeasantNearby().timer = timer;
                                                        isPeasantNearby().status = tile.status;
                                                    }else{
                                                        console.log('TARGET === KEY')
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
                
                        <Notification />
            </div>    
        )
           
    }else{
        return (<></>)
    }
}

export default Resource;