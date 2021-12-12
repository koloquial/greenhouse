import React, { useState } from 'react';

//components
import Resources from './active/Resources';
import Structures from './active/Structures';
import Units from './active/Units';
import Navigation from './Navigation';

import SubMenu from './active/SubMenu';

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

                    <Navigation setActive={setActive} />
                    
                    <div className='general-bg'>
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
                            setActive={setActive}
                        />

                        <SubMenu
                            active={active}
                            setActive={setActive}
                            player={player}
                            setView={setView} 
                            setTile={setTile}
                            world={world}
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

