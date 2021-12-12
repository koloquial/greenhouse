import React, { useState, useEffect } from 'react';
import getAction from './functions/getAction.js';
import getNearby from './functions/getNearby.js';

import notify from '../../../../Notification/functions/notify.js';
import Notification from '../../../../Notification/Notification.js';

const Controller = ({ tile, setTile, world, view, setView, update, setUpdate }) => {
    const [nearby, setNearby] = useState({north: {}, south: {}, east: {}, west: {}});
    const [alertMessage, setAlertMessage] = useState('');
    const [alertTime, setAlertTime] = useState(1.5 * 1000);

    useEffect(() => {
        setNearby(getNearby(world, view, tile))
    }, [update])

    useEffect(() => {
        if(alertMessage !== ''){
            notify(alertMessage, 'warning', alertTime);
            setTimeout(() => setAlertMessage(), alertTime)
        }
   
    }, [alertMessage])

    useEffect(() => {
        console.log('called tile.timer')
        if(tile.timer > 0){
            setTimeout(() => {
                tile.timer = tile.timer - 1;
                setUpdate(update + 1)
            }, 1000)
        }
    }, [update])

    document.onkeydown = checkKey;

    function checkKey(e) {
        
        console.log('TILE', tile.status)
        if(tile.type === 'Unit' && tile.status === 'idle'){
            e = e || window.event;
        
            if (e.keyCode === 38) {
                // up arrow
                handleRight('north')
            }
            else if (e.keyCode === 40) {
                // down arrow
                handleRight('south')
            }
            else if (e.keyCode === 37) {
               // left arrow
               handleRight('west')
            }
            else if (e.keyCode === 39) {
               // right arrow
               handleRight('east')
            }else if (e.keyCode === 87) {
                // w
                handleLeft('North', tile, world, view, setAlertMessage)
            }
            else if (e.keyCode === 65) {
                // a
                handleLeft('West', tile, world, view, setAlertMessage)
            }
            else if (e.keyCode === 83) {
               // s
               handleLeft('South', tile, world, view, setAlertMessage)
            }
            else if (e.keyCode === 68) {
               // d
               handleLeft('East', tile, world, view, setAlertMessage)
            }
        }
        
    
    }

    const handleLeft = (direction) => {
        let result = getAction(direction, tile, world, view, setAlertMessage);
        if(result){
            setView(world.grid[result[0]][result[1]]);
        }
        setTile(tile);
        setUpdate(update + 1);
    }

    const handleRight = (direction) => {
        setTile(nearby[direction]);
        setUpdate(update + 1);
    }

    return (
        <>
        <Notification />
        {tile.status === 'idle' ? (<>
            <div style={{float: 'left', width: '100px'}}>
                {console.log('STATUS', tile.status)}
                <table>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <button className='controls' onClick={() => handleLeft('North')}>
                                <i class="fas fa-caret-up fa-lg"></i>
                            </button>
                        </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>
                        <button className='controls' onClick={() => handleLeft('West')}>
                                <i class="fas fa-caret-left fa-lg"></i>
                            </button>
                        </td>
                        <td>&nbsp;</td>
                        <td>
                        <button className='controls' onClick={() => handleLeft('East')}>
                                <i class="fas fa-caret-right fa-lg"></i>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>
                        <button className='controls' onClick={() => handleLeft('South')}>
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
                            (<button className='controls' onClick={() => handleRight('north')}>{nearby.north.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        {nearby.west !== undefined ? 
                            (<button className='controls' onClick={() => handleRight('west')}>{nearby.west.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        {nearby.east !== undefined ? 
                            (<button className='controls' onClick={() => handleRight('east')}>{nearby.east.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        {nearby.south !== undefined ? 
                            (<button className='controls' onClick={() => handleRight('south')}>{nearby.south.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </div></>) : (<><h4>{tile.status}ing.</h4><p>{tile.timer}s</p></>)}
    </>
    )
}
export default Controller;