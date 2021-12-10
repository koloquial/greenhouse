import Controller from './Controller';

const Unit = ({ tile, setTile, world, view, setView, update, setUpdate }) => {
    if(tile.type === 'Unit'){
        return (
            <div className={`${tile.parentType}-resource`}>
               <Controller 
                tile={tile}
                setTile={setTile} 
                world={world} 
                view={view}
                setView={setView}
                update={update}
                setUpdate={setUpdate} 
            />
            </div> 
        )
    }else{
        return (<></>)
    }
}

export default Unit;
