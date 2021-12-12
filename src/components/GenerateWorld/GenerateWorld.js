//classes
import Player from '../../classes/Player';
import World from '../../classes/World/World';

//functions
import saveFile from '../../functions/saveFile';
import loadFile from '../../functions/loadFile';
import deleteSave from '../../functions/deleteSave';

const GenerateWorld = ({ world, setWorld, setPlayer }) => {
    return (
        <>
            {world === undefined ?
             
                <button onClick={() => {
                    let modelWorld = new World();
                    let model = new Player('Dashboard');
                    model.fillPlayer(modelWorld);
                    setPlayer(model); 
                    setWorld(modelWorld);
                }}>Generate World</button> 
                
                : 
                
                <>
                <button onClick={() => alert(`
                    W,A,S,D : move selected units.

                    Arrow keys: select nearby tile while.

                    Shift: go back from selected tile to nearby peasant.

                    # keys: preform action (eg. felling wood) 
                    on corresponding resource.
                    `)}>Keyboard Shortcuts</button>
                    <br />
                    {/* <button onClick={() => {saveFile(); alert('Not yet implemented. Check console.');}}>Save</button>&nbsp;
                    <button onClick={() => {loadFile(); alert('Not yet implemented. Check console.');}}>Load</button>&nbsp;
                    <button onClick={() => {deleteSave(); alert('Not yet implemented. Check console.');}}>Delete Save</button> */}
                </>
            }
        </>
    )
}
export default GenerateWorld;
