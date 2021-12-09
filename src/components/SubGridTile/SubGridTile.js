const SubGridTile = ({ view, setTile }) => {
    if(view === undefined){
        return <></>

    }else{
        return (
            <div className='container'>
                <div className={`${view.subType}-heading`}>
                    {view.subType}
                </div>
                <div className={`${view.subType}-content`}>
                    <center>
                        <table>
                            {view.grid.map(row => {
                                return (
                                    <tr>
                                        {row.map(tile => {
                                            return (
                                                <td>
                                                    <div className={tile.parentType} onClick={() => {
                                                        setTile(tile);
                                                    }}>
                                                        <p>{tile.icon}</p>
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
export default SubGridTile;

