import React, { useState } from 'react';
import Resource from './TileType/Resource';
import Structure from './TileType/Structure';
import Unit from './TileType/Unit';
import CardFlip from './CardFlip';

const ClassTile = ({ tile }) => {
    
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
               
                <Resource tile={tile} />

                <Structure tile={tile} />

                <Unit tile={tile} />
                
            </div>
        )
    }
}
export default ClassTile;

