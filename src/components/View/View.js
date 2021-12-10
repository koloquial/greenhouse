import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import { useEffect } from 'react/cjs/react.development';
import Clearing from '../../classes/Resource/Clearing';

const View = ({subject, data, setView, view, setArea, setTile, setForceUpdate, forceUpdate, world }) => {
    const [flip, setFlip] = useState(false);
    const [nearBy, setNearBy] = useState({north: {}, south: {}, east: {}, west: {}});

    useEffect(() => {
        if(data.type === 'Unit'){
            let north, south, east, west;

            try{
                north = view.grid[data.location[0] - 1][data.location[1]];
            }catch(e){}
    
            try{
                south = view.grid[data.location[0] + 1][data.location[1]];
            }catch(e){}
    
            try{
                east = view.grid[data.location[0]][data.location[1] + 1];
            }catch(e){}
    
            try{
                west = view.grid[data.location[0]][data.location[1] - 1];
            }catch(e){}
            
            // setNearBy({north, south, east, west})
            console.log('N', north);
            console.log('S', south);
            console.log('E', east);
            console.log('W', west);
            setNearBy({north, south, east, west})
        } 
    }, [forceUpdate])

    

    }

    return (
        

<>


<div style={{float: 'right'}}>
    <table>
        <tr>
            <td>&nbsp;</td>
            <td>
                {nearBy.north !== undefined ? 
                    (<button className='controls'>{nearBy.north.icon}</button>) 
                    : (<button className='controls'>&nbsp;</button>)
                }
            </td>
            <td>&nbsp;</td>
        </tr>

        <tr>
            <td>
            {nearBy.west !== undefined ? 
                    (<button className='controls'>{nearBy.west.icon}</button>) 
                    : (<button className='controls'>&nbsp;</button>)
                }
            </td>
            <td>&nbsp;</td>
            <td>
            {nearBy.east !== undefined ? 
                    (<button className='controls'>{nearBy.east.icon}</button>) 
                    : (<button className='controls'>&nbsp;</button>)
                }
            </td>
        </tr>
        

        <tr>
            <td>&nbsp;</td>
            
            <td>
                {nearBy.south !== undefined ? 
                    (<button className='controls'>{nearBy.south.icon}</button>) 
                    : (<button className='controls'>&nbsp;</button>)
                }
            </td>
            <td>&nbsp;</td>
        </tr>
       
        
    </table>
    </div>

