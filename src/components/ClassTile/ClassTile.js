import React, { useState } from 'react';
import Resource from './TileType/Resource';
import Structure from './TileType/Structure';
import Unit from './TileType/Unit';
import CardFlip from './CardFlip';
import Companion from './TileType/Companion';

const ClassTile = ({ tile, setTile, world, view, setView, update, setUpdate, player, battleLog }) => {
    console.log('[Class Tile]:', tile)
    if(tile === undefined){
        return <></>

    }else{
        return (
            <div className='container'>

                <div className={`${tile.parentType}-heading`}>
                    {tile.name} (<i>{tile.subType}</i>)
                    <div style={{float: 'right'}}>
                        <p className='icon'>{tile.icon}</p>
                    </div> 
                </div>

                <div className='image-heading'>
                    <CardFlip tile={tile} world={world} view={view} />
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

                <Structure 
                    tile={tile}
                    view={view}
                    setView={setView}
                    update={update}
                    setUpdate={setUpdate}
                    world={world}
                    player={player}
                />

                <Unit 
                    tile={tile}
                    setTile={setTile} 
                    world={world} 
                    view={view}
                    setView={setView} 
                    update={update} 
                    setUpdate={setUpdate} 
                />

                <Companion
                    battleLog={battleLog}
                    tile={tile}
                    view={view} 
                    setView={setView}
                    update={update}
                    setUpdate={setUpdate}
                    world={world}
                    player={player}
                />
                
            </div>
        )
    }
}
export default ClassTile;

