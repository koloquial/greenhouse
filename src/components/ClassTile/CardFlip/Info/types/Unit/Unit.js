const Unit = ({ tile, setFlip }) => {
    console.log('unit', tile)
    return (
        <div className={`${tile.parentType}-info`}>
            <div style={{float: 'left', display: 'inline-block'}}>
                <h2>{tile.name}</h2>
            </div>

            <div style={{float: 'right', display: 'inline-block'}}>
                <button  onClick={() => setFlip(false)}>Back</button>
            </div>

            <br /><br />
            <hr />
            
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
            </table>   
        </div>
    )
}

export default Unit;