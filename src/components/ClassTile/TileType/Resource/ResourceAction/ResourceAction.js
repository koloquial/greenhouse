const ResourceAction = ({ tile, isPeasantNearby, setTarget, notify, setPlayerReward, setTimer, timer }) => {

    return (
        <table>
            <tr>
                {Object.keys(tile.resource).map(key => {
                    return (
                        <td>
                            <center>
                                {isPeasantNearby() ? 
                                    <>
                                        {/*peasant nearby, idle*/}
                                        {tile.status === 'idle' ? 
                                            <div className={`${tile.parentType}-resourceItem`} onClick={() => {
                                                    if(tile.status === 'idle'){
                                                        setTarget(key);
                                                        let time = tile.execute(tile.actions[key], setPlayerReward, setTimer);
                                                        notify(`${tile.actions[key]}ing.`, 'info', time * 1000)
                                                        isPeasantNearby().timer = timer;
                                                        isPeasantNearby().status = tile.status;
                                                    }
                                                }}>
                                                    <h4>{key[0].toUpperCase() + key.slice(1)}</h4>
                                                    <br /><p>{Array.isArray(tile.resource[key]) ? tile.resource[key].length : tile.resource[key]}</p>
                                            </div>
                                        : <>
                                            {/*peasant nearby, not idle*/}
                                        </>   
                                        }
                                    </>
                                    : <>
                                        {/*peasant not near*/}
                                        {tile.status === 'idle' ?
                                            <>{/*peasant not near, idle*/}</> 
                                            : <>{/*peasant not near, not idle*/}</>
                                        }
                                    </>  
                                }
                            </center>
                        </td>
                    )
                })}
            </tr>
            {timer !== undefined && tile.status !== 'idle' ?
                                                <>
                                                    <h4>{tile.status}ing.</h4> <p>{timer}s</p>
                                                </> : <></>
                                            }
        </table>
    )

}
export default ResourceAction;