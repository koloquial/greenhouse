import React, { useState } from 'react';

//components
import Resources from './active/Resources';
import Structures from './active/Structures';
import Units from './active/Units';
import Navigation from './Navigation';

const PlayerTile = ({ player, world, setView, setTile }) => {
    const [active, setActive] = useState('Resources');

    if(player === undefined){
        return <></>

    }else{
        return (
            <div className='container'>
                <div className='Player-heading'>
                    {player.name}
                </div>

                <div className='Player-content'>
                    <Navigation setActive={setActive} />

                    <Structures 
                        active={active} 
                        player={player} 
                        world={world} 
                        setView={setView} 
                        setTile={setTile} 
                    />
                    
                    <Resources 
                        active={active} 
                        player={player} 
                    />

                    <Units 
                        active={active} 
                        player={player} 
                        world={world} 
                        setView={setView} 
                        setTile={setTile} 
                    />
                </div>
            </div>
        )
    }
}
export default PlayerTile;

