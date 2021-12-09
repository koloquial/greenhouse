const WorldTile = ({ world, setView, setTile }) => {
    if(world === undefined){
        return <></>

    }else{
        return (
            <div className='container'>
                <div className='World-heading'>
                    World Map
                </div>
                <div className='World-content'>
                    <center>
                        <table>
                            {world.grid.map(row => {
                                return (
                                    <tr>
                                        {row.map(tile => {
                                            return (
                                                <td>
                                                    <div className={tile.discovered ? tile.subType : `${tile.subType}-disabled`} onClick={() => {
                                                        if(tile.discovered){
                                                            setView(tile);
                                                            setTile();
                                                        }
                                                    }}>
                                                        &nbsp;
                                                    </div>  
                                                </td>
                                                )
                                            })}
                                    </tr>
                                )
                            })}
                        </table>
                    </center>
                </div>
            </div>
        )
    }
}
export default WorldTile;

