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

    const getAction = (action) => {
        let oldX = data.location[0];
        let oldY = data.location[1];
        let x, y;

        switch(action){
        case 'North':
            x = data.location[0] - 1;
            y = data.location[1];
        break;
        case 'South':
                x = data.location[0] + 1;
                y = data.location[1];
            break;
            case 'East':
                x = data.location[0];
                y = data.location[1] + 1;
            break;
            case 'West':
                x = data.location[0];
                y = data.location[1] - 1;
            break;
        default: break;
        }
try{
        if(view.grid[x][y].subType === 'Clearing'){
            //set view location to object
            view.grid[x][y] = data;

            //set clearing to old location
            view.grid[oldX][oldY] = new Clearing(view.subType, [oldX, oldY])

            //set new location for object
            data.location = [x, y];

            data.steps = data.steps + 1;

            //update
            setForceUpdate(forceUpdate + 1);

        }else{
            console.log(`${view.grid[x][y].subType} is in the way.`);
        }
    }catch(e){
        console.log('out of bounds')
        //check to see if there is view to action
        switch(action){
            case 'North':
                try{
                    let x = view.location[0] - 1;
                    let y = view.location[1];

                    if(world.grid[x][y].grid[11][data.location[1]].subType === 'Clearing'){
                        console.log('move valid');

                        //put obj in new location
                        world.grid[x][y].grid[11][data.location[1]] = data;

                        //set old location to clearing
                        view.grid[oldX][oldY] = new Clearing(view.subType, [oldX, oldY])

                        //change object location
                        data.location = [11, data.location[1]];

                        data.steps = data.steps + 1;

                        data.parentType = world.grid[x][y].subType;

                        data.worldLocation = [x, y];

                        console.log('data', data)

                        //discover world?
                        world.grid[x][y].discovered = true;

                        setView(world.grid[x][y]);
                        setArea(world.grid[x][y].subType)

                        //update
                        setForceUpdate(forceUpdate + 1);

                    }else{
                        console.log(`${world.grid[x][y].grid[11][data.location[1]].subType} blocks way.`)
                    }
                }catch(e){
                    console.log('off world')
                }
                break;
                case 'South':
                    try{
                        let x = view.location[0] + 1;
                        let y = view.location[1];
    
                        if(world.grid[x][y].grid[0][data.location[1]].subType === 'Clearing'){
                            console.log('move valid');
    
                            //put obj in new location
                            world.grid[x][y].grid[0][data.location[1]] = data;
    
                            //set old location to clearing
                            view.grid[oldX][oldY] = new Clearing(view.subType, [oldX, oldY])
    
                            //change object location
                            data.location = [0, data.location[1]];
    
                            data.steps = data.steps + 1;
    
                            data.parentType = world.grid[x][y].subType;
    
                            //discover world?
                            world.grid[x][y].discovered = true;
    
                            setView(world.grid[x][y]);
                            setArea(world.grid[x][y].subType)
    
                            //update
                            setForceUpdate(forceUpdate + 1);
    
                        }else{
                            console.log(`${world.grid[x][y].grid[0][data.location[1]].subType} blocks way.`)
                        }
                    }catch(e){
                        console.log('off world')
                    }
                    break;
                    case 'East':
                        try{
                            let x = view.location[0];
                            let y = view.location[1] + 1;
        
                            if(world.grid[x][y].grid[data.location[0]][0].subType === 'Clearing'){
                                console.log('move valid');
        
                                //put obj in new location
                                world.grid[x][y].grid[data.location[0]][0] = data;
        
                                //set old location to clearing
                                view.grid[oldX][oldY] = new Clearing(view.subType, [oldX, oldY])
        
                                //change object location
                                data.location = [data.location[0], 0];
        
                                data.steps = data.steps + 1;
        
                                data.parentType = world.grid[x][y].subType;
        
                                //discover world?
                                world.grid[x][y].discovered = true;
        
                                setView(world.grid[x][y]);
                                setArea(world.grid[x][y].subType)
        
                                //update
                                setForceUpdate(forceUpdate + 1);
        
                            }else{
                                console.log(`${world.grid[x][y].grid[data.location[0]][0].subType} blocks way.`)
                            }
                        }catch(e){
                            console.log('off world')
                        }
                        break;
                        case 'West':
                        try{
                            let x = view.location[0];
                            let y = view.location[1] - 1;
        
                            if(world.grid[x][y].grid[data.location[0]][11].subType === 'Clearing'){
                                console.log('move valid');
        
                                //put obj in new location
                                world.grid[x][y].grid[data.location[0]][11] = data;
        
                                //set old location to clearing
                                view.grid[oldX][oldY] = new Clearing(view.subType, [oldX, oldY])
        
                                //change object location
                                data.location = [data.location[0], 11];
        
                                data.steps = data.steps + 1;
        
                                data.parentType = world.grid[x][y].subType;
        
                                //discover world?
                                world.grid[x][y].discovered = true;
        
                                setView(world.grid[x][y]);
                                setArea(world.grid[x][y].subType)
        
                                //update
                                setForceUpdate(forceUpdate + 1);
        
                            }else{
                                console.log(`${world.grid[x][y].grid[data.location[0]][11].subType} blocks way.`)
                            }
                        }catch(e){
                            console.log('off world')
                        }
                        break;
            default: break;
        }
    }

    }

    return (
        

                    {data.type === 'Unit' ? (<>

                        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        
                        <div className='imageFront' onClick={() => setFlip(true)}>
                            <img 
                                src={data.getImage()} 
                                style={{width: '100%', opacity: .5, margin: '0', cursor: 'pointer'}} 
                                title={`Image by ${data.credit} at Pixabay`} 
                            />
                        </div>
          
        

        
          <div className='imageBack'>
              <div style={{float: 'right', display: 'inline-block'}}><button  onClick={() => setFlip(false)}>Back</button></div>
              <div style={{float: 'left', display: 'inline-block'}}> <h2>{data.name}</h2></div>
              <br /><br />
              <hr />
              <table style={{width: '100%'}}>
                <tr>
                <td><center><h4>Health</h4> <p>{data.health[0]} / {data.health[1]}</p></center></td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                    <td><center><h4>Attack</h4> <p>{data.attack}</p></center></td>
                    <td>&nbsp;&nbsp;&nbsp;</td>
                    <td><center><h4>Defense</h4> <p>{data.defense}</p></center></td>
                    <td>&nbsp;&nbsp;&nbsp;</td>
                    <td><center><h4>Speed</h4> <p>{data.speed}</p></center></td>
                </tr>
                <br />
                <tr>
                    {Object.keys(data.starMap).map(key => {
                        return (
                            <>
                                <td><center><h4>{key[0].toUpperCase() + key.slice(1)}</h4><p>{data.starMap[key][0]} / {data.starMap[key][1]}</p></center></td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                            </>
                        )
                    })}
                </tr>
                <br />
                Steps: {data.steps}<br />
                Endurance: <br />
                </table>
               
          </div>
        
      </ReactCardFlip>

{flip ? (<></>) : (
<>
<div style={{float: 'left', width: '100px'}}>
    <table>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td><button 
                                    onMouseDown={() => { 
                                        getAction('North')
                                    }} 

                                        onMouseUp={() => {
                                        console.log('up')
                                        }} 
                                            className='controls'>
                                                <i class="fas fa-caret-up fa-lg"></i>
                                                </button>
                                            </td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td><button onClick={() => getAction('West')} className='controls'><i class="fas fa-caret-left fa-lg"></i></button></td>
                                    <td>&nbsp;</td>
                                    <td><button onClick={() => getAction('East')} className='controls'><i class="fas fa-caret-right fa-lg"></i></button></td>
                                </tr>
                                <tr>
                                <td>&nbsp;</td>
                                    <td><button onClick={() => getAction('South')} className='controls'><i class="fas fa-caret-down fa-lg"></i></button></td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
</div>

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

