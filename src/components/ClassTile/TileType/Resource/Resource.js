import React, { useState, useEffect} from 'react';
import Clearing from '../../../../classes/Resource/Clearing';
import getNearby from '../Unit/Controller/functions/getNearby';

import Notification from '../../../Notification';
import notify from '../../../Notification/functions/notify';

import ResourceAction from './ResourceAction';

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
        let near = getNearby(world, view, tile);
        setNearby(near)

    }, [tile])

    useEffect(() => {
        const peasant = isPeasantNearby();
        if(peasant){
            peasant.timer = timer;
        }
    }, [timer])


    if(tile.type === 'Resource'){
        return (
            <div className={`${tile.parentType}-resource`}>
                <div style={{float: 'right'}}>
                    {isPeasantNearby() ? 
                        <button onClick={() => setTile(isPeasantNearby())}>{isPeasantNearby().name}</button>
                         : <></>
                    }
                </div>

                <Notification />
               
                <ResourceAction 
                    tile={tile} 
                    isPeasantNearby={isPeasantNearby} 
                    setTarget={setTarget} 
                    notify={notify}
                    setPlayerReward={setPlayerReward}
                    setTimer={setTimer}
                    timer={timer}
                    /> 
            </div>    
        )
           
    }else{return <></>}
}

export default Resource;