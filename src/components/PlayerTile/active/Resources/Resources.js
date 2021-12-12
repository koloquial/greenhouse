const Resources = ({ active, player }) => {
    if(active === 'Resources'){
        return (
            <table>
                <tr>
                    <td>
                        <center>
                            <div className='Player-resourceItem'>
                                <h4>Gold</h4><br />
                                <p>{player.gold}</p>
                                </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className='Player-resourceItem' onClick={() => console.log('player wood locations', player.woodLocation)}>
                                <h4>Wood</h4><br />
                                <p>{player.wood}</p>
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className='Player-resourceItem'>
                                <h4>Iron</h4><br />
                                <p>{player.iron}</p>
                            </div>
                        </center>
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>
                            <div className='Player-resourceItem'>
                                <h4>Food</h4><br />
                                <p>{player.food}</p>
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className='Player-resourceItem'>
                                <h4>Shelter</h4><br />
                                <p>{player.shelter}</p>
                            </div>
                        </center>
                    </td>
                    <td>
                        <center>
                            <div className='Player-resourceItem' onClick={() => console.log('player seed locations', player.seedsLocation)}>
                                <h4>Seeds</h4><br />
                                <p>{player.seeds}</p>
                            </div>
                        </center>
                    </td>
                </tr>
            </table>
        )
    }else{
        return <></>
    }
}

export default Resources;