import React, { useState } from 'react';
import Resource from './TileType/Resource';
import Structure from './TileType/Structure';
import Unit from './TileType/Unit';
import CardFlip from './CardFlip';

const ClassTile = ({ tile, setTile, world, view, setView, update, setUpdate, player }) => {
    
    if(tile === undefined){
        return <></>

    }else{
        return (
            <div className='container'>

                <div className={`${tile.parentType}-heading`}>
                    {tile.subType}
                    <div style={{float: 'right'}}>
                        <p className='icon'>{tile.icon}</p>
                    </div> 
                </div>

                <div className='image-heading'>
                    <CardFlip tile={tile} />
                </div>
               
                <Resource 
                    tile={tile}
                    setTile={setTile}
                    view={view}
                    world={world}
                    player={player}
                    update={update}
                    setUpdate={setUpdate}
                />

                <Structure tile={tile} />

                <Unit 
                    tile={tile}
                    setTile={setTile} 
                    world={world} 
                    view={view}
                    setView={setView} 
                    update={update} 
                    setUpdate={setUpdate} 
                />
                
            </div>
        )
    }
}
export default ClassTile;

