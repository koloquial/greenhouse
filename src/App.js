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

  useEffect(() => {
    
  })

  return (
    <>
    <h1>Untitled Community</h1>
    
        {world === undefined ? 
            <button onClick={() => {
              setPlayer(new Player('Nick')); 
              setWorld(new World())
          }}>Start</button> : <></>
        }

        {player ?  <View subject={player.type} data={player} /> : <></>}  
        
        {world ? <View subject={'World'} data={world} setView={setView} setArea={setArea} /> : <></>}
        
        {view ? <View subject={area} data={view} setTile={setTile} /> : <></>}

        {tile ?  <View subject={tile.subType} data={tile} /> : <></>}
       
    </>
  );
}

export default App;
