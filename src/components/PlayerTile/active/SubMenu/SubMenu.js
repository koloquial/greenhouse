const SubMenu = ({ active, player, setView, setTile, world, setActive }) => {
    if(active === 'seeds' || active === 'wood'){
        return (
            <>
            <h4>{active[0].toUpperCase() + active.slice(1)}</h4>
            <div style={{float: 'right'}}><button onClick={() => setActive('Resources')}>Back</button></div>
            <br />
                <table>
                    <tr>
                        {player[`${active}Location`].map(unit => {
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
            </>
        )
    }else{
        return <></>
    }
}

export default SubMenu;