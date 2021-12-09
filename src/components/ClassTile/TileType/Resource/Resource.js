const Resource = ({ tile }) =>{
    if(tile.type === 'Resource'){
        return (
            <div className={`${tile.parentType}-resource`}>
                <table>
                    <tr>
                        {Object.keys(tile.resource).map(key => {
                            return (
                                <td>
                                    <center>
                                        <div className={`${tile.parentType}-resourceItem`}>
                                            <h4>
                                                {key[0].toUpperCase() + key.slice(1)}
                                            </h4>
                                            <br />
                                            <p>
                                                {tile.resource[key]}
                                            </p>
                                        </div>
                                    </center>
                                </td>
                            )
                        })}
                    </tr>
                </table>
            </div>    
        )
           
    }else{
        return (<></>)
    }
}

export default Resource;