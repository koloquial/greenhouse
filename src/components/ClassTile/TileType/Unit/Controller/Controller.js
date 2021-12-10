import React, { useState, useEffect } from 'react';
import getAction from './functions/getAction.js';

const Controller = ({ tile, world, view, setView, update, setUpdate }) => {
    const [nearby, setNearby] = useState({north: {}, south: {}, east: {}, west: {}});

    const checkOutOfBounds = (direction) => {
        switch(direction){
            case 'North':
                try{
                    console.log('return', world.grid[view.location[0] - 1][view.location[1]].grid[11][tile.location[1]])
                    return world.grid[view.location[0] - 1][view.location[1]].grid[11][tile.location[1]]
                }catch(e){ return {}}
            case 'South':
                try{
                    console.log('return', world.grid[view.location[0] + 1][view.location[1]].grid[0][tile.location[1]])
                    return world.grid[view.location[0] + 1][view.location[1]].grid[0][tile.location[1]]
                }catch(e){ return {}}
            case 'East':
                try{
                    console.log('return', world.grid[view.location[0]][view.location[1] + 1].grid[tile.location[0]][0])
                    return world.grid[view.location[0]][view.location[1] + 1].grid[tile.location[0]][0]
                }catch(e){ return {}}
            case 'West':
                try{
                    console.log('return', world.grid[view.location[0]][view.location[1] - 1].grid[tile.location[0]][11])
                    return world.grid[view.location[0]][view.location[1] - 1].grid[tile.location[0]][11]
                }catch(e){ return {}}
            default: return {}
        }
        
    }

    useEffect(() => {
        let north, south, east, west;

        try{
            north = view.grid[tile.location[0] - 1][tile.location[1]];
            if(north === undefined){
                north = checkOutOfBounds('North');
            }
        }catch(e){
            north = checkOutOfBounds('North');
        }

        try{
            south = view.grid[tile.location[0] + 1][tile.location[1]];
            if(south === undefined){
                south = checkOutOfBounds('South');
            }
        }catch(e){
            south = checkOutOfBounds('South');
        }

        try{
            east = view.grid[tile.location[0]][tile.location[1] + 1];
            if(east === undefined){
                east = checkOutOfBounds('East');
            }
        }catch(e){
            east = checkOutOfBounds('East');
        }

        try{
            west = view.grid[tile.location[0]][tile.location[1] - 1];
            if(west === undefined){
                west = checkOutOfBounds('West');
            }
        }catch(e){
            west = checkOutOfBounds('West');
        }
            
        setNearby({north, south, east, west})
    }, [update])

    return (
        <>
            <div style={{float: 'left', width: '100px'}}>
                <table>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <button className='controls' onClick={() => {
                                let result = getAction('North', tile, world, view);
                                if(result){
                                    setView(world.grid[result[0]][result[1]]);
                                }
                                setUpdate(update + 1);
                            }}>
                                <i class="fas fa-caret-up fa-lg"></i>
                            </button>
                        </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>
                        <button className='controls' onClick={() => {
                            let result = getAction('West', tile, world, view);
                                if(result){
                                    setView(world.grid[result[0]][result[1]]);
                                }
                                setUpdate(update + 1);
                            }}>
                                <i class="fas fa-caret-left fa-lg"></i>
                            </button>
                        </td>
                        <td>&nbsp;</td>
                        <td>
                        <button className='controls' onClick={() => {
                            let result = getAction('East', tile, world, view);
                                if(result){
                                    setView(world.grid[result[0]][result[1]]);
                                }
                                setUpdate(update + 1);
                            }}>
                                <i class="fas fa-caret-right fa-lg"></i>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>
                        <button className='controls' onClick={() => {
                            let result = getAction('South', tile, world, view);
                                if(result){
                                    setView(world.grid[result[0]][result[1]]);
                                }
                                setUpdate(update + 1);
                            }}>
                                <i class="fas fa-caret-down fa-lg"></i>
                            </button>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </div>
            
            <div style={{float: 'right'}}>
            <table>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        {nearby.north !== undefined ? 
                            (<button className='controls'>{nearby.north.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        {nearby.west !== undefined ? 
                            (<button className='controls'>{nearby.west.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        {nearby.east !== undefined ? 
                            (<button className='controls'>{nearby.east.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        {nearby.south !== undefined ? 
                            (<button className='controls'>{nearby.south.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </div>
    </>
    )
}
export default Controller;