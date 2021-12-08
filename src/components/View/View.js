const View = ({subject, data, setView, setArea, setTile}) => {
    
    return (
        <div className='container'>
            <div className={`${data.type === 'Resource' || data.type === 'Structure' ? data.parentType : subject}-heading`}>
                
                    {subject ? subject : ''}

                    <div style={{float: 'right'}}>
                        {subject !== 'World' && subject !== 'Player' ? `[${data.location[0]}, ${data.location[1]}]` : ''}
                    </div>
              
            </div>

            <div className={`${data.type === 'Resource' || data.type === 'Structure' ? data.parentType : subject}-content`}>
                <center>
                    {data !== undefined && data.type !== 'Resource' && data.type !== 'Player' && data.type !== 'Structure' ? 
                        (<table>
                            {data.grid.map(row => {
                                return (
                                    <tr>
                                        {row.map(tile => {
                                            return (
                                                <td>
                                                    {tile.discovered || tile.parentType ? (<>
                                                    
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
                                                    
                                                    </>) : (<>
                                                    
                                                        <div className={tile.parentType ? `${tile.parentType}-disabled` : `${tile.subType}-disabled`}>
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
                                                    
                                                    </>)}
                                                    
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </table>) : (<></>)
                    }

                    {data.type === 'Resource' ? (<>
                        {console.log('RESOURCE', data)}

                        <img 
                            src={data.getImage()} 
                            style={{width: '100%', opacity: .5, margin: '0'}} 
                            title={`Image by ${data.credit} at Pixabay`} 
                        />

                        <div style={{float: 'left'}}>
                        <table>
                            <tr>
                            {Object.keys(data.resource).map(key => {
                            return (
                                <td>
                                    <center>
                                        <div style={{border: '1px dotted black', padding: '10px'}}>
                                            <h4>
                                                {key[0].toUpperCase() + key.slice(1)}
                                            </h4>
                                            <br />
                                            <p>
                                                {data.resource[key]}
                                            </p>
                                        </div>
                                    </center>
                                 </td>
                            )
                        })}
                            </tr>
                        </table>
                        
                        </div>
                 
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

                    {data.type === 'Structure' ? (<>

                    {data.actions !== undefined ? (<>
                            {data.actions.map(action => {
                            return (
                                <button onClick={() => {
                                    action();
                                }}>do this</button>
                            )
                        })}
                        </>) : (<></>)}
                    </>) : (<></>)}

                </center>
              
            </div>
        </div>
    )
}

export default View;