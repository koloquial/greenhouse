const Structures = ({ active, player, world, setView, setTile }) => {
    if(active === 'Structures'){
        return (
            <table>
                <tr>
                    {player.structures.map(structure => {
                        return (
                            <td>
                                <center>
                                    <div className={`${structure.parentType}-resourceItem`} title={structure} onClick={() => {
                                        setView(world.grid[structure.worldLocation[0]][structure.worldLocation[1]]);
                                        setTile(structure);
                                    }}>
                                        {structure.icon}<br />
                                        [{structure.worldLocation[0]}, {structure.worldLocation[1]}]
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

export default Structures;