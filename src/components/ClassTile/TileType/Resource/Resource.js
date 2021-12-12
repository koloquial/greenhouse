import React, { useState, useEffect} from 'react';
import Clearing from '../../../../classes/Resource/Clearing';
import getNearby from '../Unit/Controller/functions/getNearby';

import Notification from '../../../Notification';
import notify from '../../../Notification/functions/notify';

import ResourceAction from './ResourceAction';

const Resource = ({ tile, setTile, view, world, player, update, setUpdate }) =>{
    const [nearby, setNearby] = useState();
    const [timer, setTimer] = useState();
    const [target, setTarget] = useState();
    const [resourceOrder, setResourceOrder] = useState([]);

    // const [alertMessage, setAlertMessage] = useState('');
    // const [alertTime, setAlertTime] = useState(0);
    // const [alertType, setAlertType] = useState('');

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
        peasant.status = 'idle';

        let id = null;
        Object.keys(reward).forEach(key => {
            switch(typeof reward[key]){
                //later remove number
                //add only object classes 
                //eg. wood with specific subtype of wood
                case 'number':
                    id = null;
                    for(let i = 0; i < peasant.inventory.length; i++){
                        if(peasant.inventory[i].subType === `${key[0].toUpperCase()}${key.slice(1)}`){
                            id = i;
                        } 
                    }
                    if(id !== null){
                        peasant.inventory[id].quantity = peasant.inventory[id].quantity + reward[key];
                    }else{
                        peasant.inventory.push({subType: `${key[0].toUpperCase()}${key.slice(1)}`, quantity: reward[key]});
                    }
                    notify(`+${reward[key]} ${key[0].toUpperCase()}${key.slice(1)}`, 'success', 1.5 * 1000);
                    break;
                case 'object':
                    id = null;
                    for(let i = 0; i < peasant.inventory.length; i++){
                        if(peasant.inventory[i].subType === key){
                            id = i;
                        } 
                    }
                    if(id !== null){
                        peasant.inventory[id].quantity = peasant.inventory[id].quantity + reward[key];
                    }else{
                        peasant.inventory.push(reward[key]);
                    }
                    
                    notify(`+${reward[key].quantity} ${reward[key].subType[0].toUpperCase()}${reward[key].subType.slice(1)}`, 'success', 1.5 * 1000);
                    break;
                default: break;
            }
        })
        player.addToInventory(reward, peasant);

        if(tile.status === 'delete'){
            let clearing = new Clearing(tile.parentType, [tile.location[0], tile.location[1]]);
            view.grid[tile.location[0]][tile.location[1]] = clearing;
        }
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
        console.log('CALLED TIMER')
        if(peasant){
            peasant.timer = timer;
        }
    }, [timer])

    document.onkeydown = checkKey;

    function checkKey(e) {     
        
        let peasant = isPeasantNearby();
        
  
         e = e || window.event;
         console.log('PRESSED', e.keyCode)
         if(peasant){
            if (e.keyCode === 16) {
                console.log('shift')
                // up arrow
                setTile(peasant);
            }else if(e.keyCode === 49){
                //resource 1
                let key = resourceOrder[0];
                console.log('KEY', key)
                if(resourceOrder.length > 0){
                    handleResourceItem(resourceOrder[0]);
                }
                
            }
            else if(e.keyCode === 50){
                //resource 1
                let key = resourceOrder[1];
                console.log('KEY', key)
                if(resourceOrder.length > 1 ){
                    handleResourceItem(resourceOrder[1]);
                }
                
            }
            else if(e.keyCode === 51){
                //resource 1
                let key = resourceOrder[1];
                console.log('KEY', key)
                if(resourceOrder.length > 2){
                    handleResourceItem(resourceOrder[2]);
                }
                
            }
         }
    }

    const handleBack = () => {
        setTile(isPeasantNearby());
    }


        
    const handleResourceItem = (key) => {

        if(tile.status === 'idle'){
            setTarget(key);
            let time = tile.execute(tile.actions[key], setPlayerReward, setTimer);
            notify(`${tile.actions[key]}ing.`, 'info', time * 1000)
            isPeasantNearby().timer = timer;
            isPeasantNearby().status = tile.status;
        }
    }

    if(tile.type === 'Resource'){
        return (
            <div className={`${tile.parentType}-resource`}>
                <div style={{float: 'right'}}>
                    {isPeasantNearby() ? 
                        <button onClick={() => handleBack()}>{isPeasantNearby().name}</button>
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
                    handleResourceItem={handleResourceItem}
                    setResourceOrder={setResourceOrder}
                    /> 
            </div>    
        )
           
    }else{return <></>}
}

export default Resource;