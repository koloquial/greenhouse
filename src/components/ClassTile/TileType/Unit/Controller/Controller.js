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
                            <button className='controls' onClick={() => {
                                let result = getAction('North', tile, world, view, setAlertMessage);
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
                            let result = getAction('West', tile, world, view, setAlertMessage);
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
                            let result = getAction('East', tile, world, view, setAlertMessage);
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
                            let result = getAction('South', tile, world, view, setAlertMessage);
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
                            (<button className='controls' onClick={() => {
                               
                                setTile(nearby.north);

                            }}>{nearby.north.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        {nearby.west !== undefined ? 
                            (<button className='controls' onClick={() => setTile(nearby.west)}>{nearby.west.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        {nearby.east !== undefined ? 
                            (<button className='controls' onClick={() => setTile(nearby.east)}>{nearby.east.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        {nearby.south !== undefined ? 
                            (<button className='controls' onClick={() => setTile(nearby.south)}>{nearby.south.icon}</button>) 
                            : (<button className='controls'>&nbsp;</button>)
                        }
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </div></>) : (<>{tile.status}ing... {tile.timer}</>)}
    </>
    )
}
export default Controller;