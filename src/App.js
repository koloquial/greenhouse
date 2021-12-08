import React, { useState, useEffect } from 'react';
import Player from './classes/Player/Player';
import World from './classes/World/World';
import View from './components/View';

const App = () => {
  const [world, setWorld] = useState();
  const [view, setView] = useState();
  const [area, setArea] = useState();
  const [tile, setTile] = useState();
  const [player, setPlayer] = useState();
  const [forceUpdate, setForceUpdate] = useState(0)

  useEffect(() => {
    
  })

  const save = () => {
    try{
      localStorage.setItem('UC_Save:World', JSON.stringify(world));
      console.log('Saved.')
    }catch(e){
      alert('Unable to save.')
    }
  }

  const load = () => {
    try{
      let loadFile = localStorage.getItem('UC_Save:World');
      console.log('Load:', JSON.parse(loadFile))
    }catch(e){
      alert('No save file found.')
    }
  }

  const deleteSave = () => {
    window.localStorage.clear();
    console.log('Deleted local storage.')
  }

  return (
    <>
      <h1>Untitled Community</h1>

        {world === undefined ? 
            <button onClick={() => {
              setPlayer(new Player('Nick')); 
              setWorld(new World())
          }}>Start</button> : 
          
          <>
            <button onClick={() => {save(); alert('Not yet implemented. Check console.');}}>Save</button>&nbsp;
            <button onClick={() => {load(); alert('Not yet implemented. Check console.');}}>Load</button>&nbsp;
            <button onClick={() => {deleteSave(); alert('Not yet implemented. Check console.');}}>Delete Save</button>
            <br />
          </>
        }
        {tile ?  <View subject={tile.subType} data={tile} view={view} setForceUpdate={setForceUpdate} forceUpdate={forceUpdate} setTile={setTile} /> : <></>}

        {view ? <View subject={area} data={view} setTile={setTile} /> : <></>}

        {world ? <View subject={'World'} data={world} setView={setView} setArea={setArea} /> : <></>}

        {player ?  <View subject={player.type} data={player} /> : <></>}  
    </>
  );
}

export default App;
