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
                                                        notify(`${tile.actions[key]}ing...`, 'info', time * 1000)
                                                        isPeasantNearby().timer = timer;
                                                        isPeasantNearby().status = tile.status;
                                                    }
                                                }}>
                                                    <h4>{key[0].toUpperCase() + key.slice(1)}</h4>
                                                    <br /><p>{tile.resource[key]}</p>
                                            </div>
                                        : <>
                                            {/*peasant nearby, not idle*/}
                                            {timer !== undefined ?
                                                <>
                                                    <h4>{tile.actions[key]}ing...</h4>
                                                    <br /><p>{timer}</p>
                                                </> : <></>
                                            }
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
        </table>
    )

}
export default ResourceAction;