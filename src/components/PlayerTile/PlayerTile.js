import React, { useState } from 'react';

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
                    <div className='tab'>
                        <button className="tablinks" onClick={() => setActive('Resources')}>Resources</button>
                        <button className="tablinks" onClick={() => setActive('Structures')}>Structures</button>
                        <button className="tablinks" onClick={() => setActive('Units')}>Units</button>
                    </div>
    
                    {active === 'Resources' ?
                        <table>
                            <tr>
                                <td>
                                    <center>
                                        <div className='container-small'>
                                            <h4>Gold</h4><br />
                                            <p>{player.gold}</p>
                                            </div>
                                    </center>
                                </td>
                                <td>
                                    <center>
                                        <div className='container-small'>
                                            <h4>Wood</h4><br />
                                            <p>{player.wood}</p>
                                        </div>
                                    </center>
                                </td>
                                <td>
                                    <center>
                                        <div className='container-small'>
                                            <h4>Iron</h4><br />
                                            <p>{player.iron}</p>
                                        </div>
                                    </center>
                                </td>
                                <td>
                                    <center>
                                        <div className='container-small'>
                                            <h4>Food</h4><br />
                                            <p>{player.food}</p>
                                        </div>
                                    </center>
                                </td>
                                <td>
                                    <center>
                                        <div className='container-small'>
                                            <h4>Shelter</h4><br />
                                            <p>{player.shelter}</p>
                                        </div>
                                    </center>
                                </td>
                            </tr>
                        </table>
                        : <></>
                    }
    
                    {active === 'Structures' ? 
                        <table>
                            <tr>
                                {player.structures.map(structure => {
                                    return (
                                        <td>
                                            <center>
                                                <div className='container-small' style={{cursor: 'pointer'}} onClick={() => {
                                                    setView(world.grid[structure.worldLocation[0]][structure.worldLocation[1]]);
                                                    setTile(structure);
                                                }}>
                                                    {structure.subType}<br /><br />
                                                    [{structure.worldLocation[0]}, {structure.worldLocation[1]}]
                                                </div>
                                            </center>
                                        </td>
                                    )
                                })}
                            </tr>
                        </table>
                        : <></>
                    }

                    {active === 'Units' ? 
                        <table>
                            <tr>
                                {player.units.map(unit => {
                                    return (
                                        <td>
                                            <center>
                                                <div className='container-small' onClick={() => {
                                                    setView(world.grid[unit.worldLocation[0]][unit.worldLocation[1]]);
                                                    setTile(unit);
                                                }}>
                                                    {unit.subType}<br /><br />
                                                    [{unit.worldLocation[0]}, {unit.worldLocation[1]}]
                                                </div>
                                            </center>
                                        </td>
                                    )
                                })}
                            </tr>
                        </table>
                        : <></>
                    }
                </div>
            </div>
        )
    }
}
export default PlayerTile;

