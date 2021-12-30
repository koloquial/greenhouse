import React, { useState, useEffect } from 'react';

import Notification from '../../../Notification';
import notify from '../../../Notification/functions/notify';
import getNearby from '../Unit/Controller/functions/getNearby';

const Companion = ({ tile, view, setView, update, setUpdate, world, player, battleLog }) =>{
    const [nearby, setNearby] = useState();

    const isPeasantNearby = (near) => {
        for(let key in near){
            if(near[key].subType === 'Peasant'){
                return near[key];
            }
        }
        return false;
    }

    

    useEffect(() => {
        let near = getNearby(world, view, tile);
        console.log('near', near)

        let temp = isPeasantNearby(near);
        console.log('temp', temp);
        setNearby(temp)

        if(!tile.friendly){
            if(temp){
                // battleLog.push({enemy: tile, user: temp});
                setUpdate(update + 1);
            }
        }

    }, [tile])


    console.log('[Companion TileType]:', tile)
    if(tile.type === 'Companion'){
        return (
                <div className={`${tile.parentType}-resource`}>
                    
                    
                   Companion
                    
                </div>
        )
    }else{
        return (<></>)
    }
}

export default Companion;