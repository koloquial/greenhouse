import React, { useState, useEffect } from 'react'

const Resource = ({ tile, setFlip, world, view }) => {
    const [menu, setMenu] = useState('default');
    const [subMenu, setSubMenu] = useState()

    //need to check if peasant is nearby

    return (
        <div className={`${tile.parentType}-info`}>
            <div style={{float: 'right', display: 'inline-block'}}>
                <button  onClick={() => setFlip(false)}>Back</button>
            </div>

            <div style={{float: 'left', display: 'inline-block'}}>
                <h2>{tile.subType}</h2>
            </div>

            <br /><br />
            <hr />

        {tile.subType === 'Clearing' ? <>
            {menu === 'default' ? 
                    <>
                        {Object.keys(tile.options).map(option => {
                            return (
                                <button onClick={() => {
                                    setMenu('subMenu');
                                    setSubMenu(option)
                                }}>{option}</button>
                            )
                        })}
                    </> : <></>}

            {menu === 'subMenu' ? 
                <table>
                    <tr>
                        <td>
                            <center>
                                {Object.keys(tile.options[subMenu]).map(option => {
                                    return (
                                        <div className={`${tile.parentType}-resourceItem`} onClick={() => console.log('build', option)}>
                                            {tile.options[subMenu][option]}
                                        </div>
                                    )
                                })}
                            </center>
                        </td>
                    </tr>
                </table> : <></>}
            </> : <></>}
            
        </div>
    )

}

export default Resource;