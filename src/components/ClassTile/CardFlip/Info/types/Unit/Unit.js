import React, { useState } from 'react';

const Unit = ({ tile, setFlip }) => {
    const [menu, setMenu] = useState('Stats');
    const [subMenu, setSubMenu] = useState('');

    console.log('unit', tile.options)
    return (
        <div className={`${tile.parentType}-info`}>
   
            <div className='tab'>
            <div style={{float: 'right', display: 'inline-block'}}>
                <button  onClick={() => setFlip(false)}>Photo</button>
            </div>
            {tile.options.map(option => {
                return (
                    <button onClick={() => {
                        setMenu(option)
                    }}>{option[0].toUpperCase() + option.slice(1)}</button>
                )
            })}
            </div>

            {menu === 'Stats' ? 
                <table>
                <tr>
                    <td>
                        <center>
                            <div className={`${tile.parentType}-resourceItem`}>
                                <i class="fas fa-heart"></i>
                                <p>{tile.health[0]}</p>   
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className={`${tile.parentType}-resourceItem`}>
                                <i class="fas fa-hand-rock"></i>
                                <p>{tile.attack}</p>   
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className={`${tile.parentType}-resourceItem`}>
                                <i class="fas fa-shield-alt"></i>
                                <p>{tile.defense}</p>   
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className={`${tile.parentType}-resourceItem`}>
                                <i class="fas fa-tachometer-alt"></i>
                                <p>{tile.speed}</p>   
                            </div>
                        </center>
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>
                            <div className={`${tile.parentType}-resourceItem`}>
                            <i class="fas fa-carrot"></i>
                                <p>{tile.food}</p>   
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className={`${tile.parentType}-resourceItem`}>
                                <i class="fas fa-campground"></i>
                                <p>{tile.shelter}</p>   
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className={`${tile.parentType}-resourceItem`}>
                                <i class="fas fa-tree"></i>
                                <p>{tile.starMap.felling[0]}</p>   
                            </div>
                        </center>
                    </td>
                </tr>
            </table> : <></>
        }


        {menu === 'Inventory' ? <>
        {console.log('TILE:', tile)}
            {tile.inventory.map(item => {
                console.log('ITEM', item)
                return (
                    <div className={`${tile.parentType}-resourceItem`} onClick={() => alert('use item')}>
                        <h4>{item.subType}</h4><p>x {item.quantity}</p>
                        <div style={{float: 'right', verticalAlign: 'top'}}>
                            <button onClick={() => alert('drop item')}>Drop</button>
                            <button onClick={() => alert('info item')}>Info</button>
                        </div>
                    </div>
                )
            })}
        
        </> : <></>}
            

        </div>
    )
}

export default Unit;