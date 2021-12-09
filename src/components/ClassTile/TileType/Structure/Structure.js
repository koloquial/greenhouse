const Structure = ({ tile }) =>{
    if(tile.type === 'Structure'){
        return (
                <div className={`${tile.parentType}-resource`}>
                    {tile.actions !== undefined ? (<>
                        {tile.actions.map(action => {
                            return (
                                <button onClick={() => {
                                    action();
                                }}>Action</button>
                            )
                        })}
                    </>) : (<></>)}
                </div>
        )
    }else{
        return (<></>)
    }
}

export default Structure;