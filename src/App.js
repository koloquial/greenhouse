import React, { useState, useEffect } from 'react';

//display components
import GenerateWorld from './components/GenerateWorld';

//tile components
import PlayerTile from './components/PlayerTile';
import WorldTile from './components/WorldTile/WorldTile';
import SubGridTile from './components/SubGridTile/SubGridTile';
import ClassTile from './components/ClassTile';

const App = () => {
  const [world, setWorld] = useState();
  const [player, setPlayer] = useState();
  const [view, setView] = useState();
  const [tile, setTile] = useState();
  const [update, setUpdate] = useState(0)

  return (
    <>
      <h3>Untitled Community</h3>
      
      <GenerateWorld 
        world={world} 
        setWorld={setWorld} 
        setPlayer={setPlayer} 
      />
      
      <ClassTile 
        tile={tile}
        setTile={setTile}
        world={world}
        view={view}
        setView={setView}
        update={update}
        setUpdate={setUpdate}
        player={player}
      />

      <SubGridTile 
        view={view}
        setTile={setTile}
      />

      <WorldTile 
        world={world}
        setView={setView}
        setTile={setTile}
      />

      <PlayerTile 
        player={player} 
        world={world}
        setView={setView}
        setTile={setTile}
      /> 
    </>
  );
}

export default App;
