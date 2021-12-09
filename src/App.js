import React, { useState, useEffect } from 'react';

//display components
import GenerateWorld from './components/GenerateWorld';

//tile components
import PlayerTile from './components/PlayerTile';
import WorldTile from './components/WorldTile/WorldTile';
import SubGridTile from './components/SubGridTile/SubGridTile';

const App = () => {
  const [world, setWorld] = useState();

  const [area, setArea] = useState();
  
  const [player, setPlayer] = useState();
  const [forceUpdate, setForceUpdate] = useState(0)

  //subgrid area to world map
  const [view, setView] = useState();

  //specific tile on subgrid
  const [tile, setTile] = useState();

  return (
    <>
      <h3>Untitled Community</h3>
      
      <GenerateWorld world={world} setWorld={setWorld} setPlayer={setPlayer} />
      
        {/* {view ? 
          <View 
            subject={area} 
            data={view} 
            
            setTile={setTile} setView={setView} /> 
          : <></>
        } */}


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
