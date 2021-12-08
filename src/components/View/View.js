const View = ({subject, data, setView, setArea, setTile}) => {
    
    return (
        <div className='container'>
            <div className={`${data.type === 'Resource' ? data.parentType : subject}-heading`}>
            <center>{subject ? subject : ''}</center>
            </div>
            <div className={`${data.type === 'Resource' ? data.parentType : subject}-content`}>
                <center>
                {data !== undefined && data.type !== 'Resource' && data.type !== 'Player' ? 
                    (<table>
                        {data.grid.map(row => {
                            return (
                                <tr>
                                    {row.map(tile => {
                                        return (
                                            <td>
                                                <div className={tile.parentType ? tile.parentType : tile.subType} onClick={() => {
                                                    if(tile.parentType){
                                                        setTile(tile);
                                                    }else{
                                                        setView(tile);
                                                        setArea(tile.subType)
                                                    }
                                                }}>
                                                    <center>
                                                        {tile.icon ? 
                                                            <p className={tile.parentType ? `${tile.parentType}-icon` : `${tile.subType}-icon`}>
                                                                {tile.icon}
                                                            </p> : 

                                                            <p className={tile.parentType ? `${tile.parentType}-icon` : `${tile.subType}-icon`}>
                                                                &nbsp;
                                                            </p>
                                                        }
                                                    </center>
                                                </div>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </table>) : (<></>)
                }

                {data.type === 'Resource' ? (<>
                resource
                </>) : (<></>)}

                {data.type === 'Player' ? (<>
                    <table>
                        <tr>
                            <td>Gold: {data.gold}</td>
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td>Wood: {data.wood}</td>
                        </tr>
                        <tr>
                            <td>Iron: {data.iron}</td>
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <br />
                        <br />
                        <tr>
                            <td>Food: {data.food}</td>
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td>Shelter: {data.shelter}</td>
                        </tr>
                    </table>
                </>) : (<></>)}
                </center>
            </div>
        </div>
    )
}

export default View;