
import getAction from './functions/getAction.js';

const Controller = ({ tile, world, view, setView, update, setUpdate }) => {
    return (
        <div style={{float: 'left', width: '100px'}}>
            <table>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <button className='controls' onClick={() => {
                            let result = getAction('North', tile, world, view);
                            console.log('RESULT', result);
                            try{
                                if(result){
                                    console.log('SET VIEW CALLED')
                                    console.log(setView)
                                    setView(world.grid[result[0]][result[1]]);
                                }
                            }catch(e){
                                console.log('CATCH')
                            }
                            console.log('update called')
                            setUpdate(update + 1);
                        }}>
                                <i class="fas fa-caret-up fa-lg"></i>
                        </button>
                    </td>
                    <td>&nbsp;</td>
                </tr>

                <tr>
                    <td>
                        <button onClick={() => getAction('West', tile, world, view)} className='controls'>
                            <i class="fas fa-caret-left fa-lg"></i>
                        </button>
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        <button onClick={() => getAction('East', tile, world, view)} className='controls'>
                            <i class="fas fa-caret-right fa-lg"></i>
                        </button>
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <button onClick={() => getAction('South', tile, world, view)} className='controls'>
                            <i class="fas fa-caret-down fa-lg"></i>
                        </button>
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </div>
    )
}
export default Controller;