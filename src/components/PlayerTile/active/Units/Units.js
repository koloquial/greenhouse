const Units = ({ active, player, world, setView, setTile }) => {
    if(active === 'Units'){
        return (
            <table>
                <tr>
                    {player.units.map(unit => {
                        return (
                            <td>
                                <center>
                                    <div className={`${unit.parentType}-resourceItem`} title={unit} onClick={() => {
                                        setView(world.grid[unit.worldLocation[0]][unit.worldLocation[1]]);
                                        setTile(unit);
                                    }}>
                                        {unit.icon}<br />
                                        {unit.name}
                                    </div>
                                </center>
                            </td>
                        )
                    })}
                </tr>
            </table>
        )
    }else{
        return <></>
    }
}

export default Units;