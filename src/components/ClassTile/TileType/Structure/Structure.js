
import Notification from '../../../Notification';
import notify from '../../../Notification/functions/notify';

const Structure = ({ tile, view, setView, update, setUpdate, world, player }) =>{
    if(tile.type === 'Structure'){
        return (
                <div className={`${tile.parentType}-resource`}>
                    <Notification />
                    
                    {tile.actions !== undefined ? (<>
                    {console.log('VIEW STRUCT', view)}
                        {tile.actions.map(action => {
                            return (
                                <button onClick={() => {
                                    let result = tile.getAction(action, view, player);
                                    console.log('RESULT', result)
                                    if(Array.isArray(result)){
                                        notify(`${action}.`, 'success', 1.5 * 1000);
                                        setUpdate(update + 1)
                                    }else{
                                        notify(`${action} failed.`, 'warning', 1.5 * 1000);
                                    }
                                    
                                }}>{action}</button>
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