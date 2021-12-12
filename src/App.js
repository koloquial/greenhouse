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
  const [update, setUpdate] = useState(0);
  const [battleLog, setBattleLog] = useState([]);

  return (
    <>
      {battleLog.length ? 
        (<>
          {battleLog.map(battle => {
            return (
              <div className={`${battle.enemy.parentType}-battle`}>
                
                <div className='battle-box' style={{alignContent: 'right'}}>
                  {console.log('ENEMY', battle.enemy)}
                  <center>
                  <table>
                    <tr>
                      <td>{battle.enemy.health[0]}/{battle.enemy.health[1]}</td>
                      <td><i>{battle.enemy.subType}</i> {battle.enemy.icon}</td>
                    </tr>
                    <tr>
                      <img 
                        src={battle.enemy.getImage()} 
                        style={{width: '25%', opacity: 1, margin: '0'}} 
                        title={`Image by ${battle.enemy.credit} at Pixabay`} 
                      />
                    </tr>
                  </table>
                  </center>
                </div>

                <div className='battle-box' style={{alignContent: 'left'}}>
                {console.log('USER', battle.user)}<center>
                <table>
                    <tr>
                      <td>{battle.user.health[0]}/{battle.user.health[1]}</td>
                      <td>{battle.user.name} {battle.user.icon}</td>
                    </tr>
                    <tr>
                      <img 
                        src={battle.user.getImage()} 
                        style={{width: '25%', opacity: 1, margin: '0'}} 
                        title={`Image by ${battle.user.credit} at Pixabay`} 
                      />
                    </tr>
                  </table>
                  </center>
                </div>
          
            </div>)
          })}
        </>) 
        
        : (<>
            <GenerateWorld 
              world={world} 
              setWorld={setWorld} 
              setPlayer={setPlayer} 
            />
            <SubGridTile 
              view={view}
              setTile={setTile}
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
              battleLog={battleLog}
            />
            <PlayerTile 
              player={player} 
              world={world}
              setView={setView}
              setTile={setTile}
            /> 
            <WorldTile 
              world={world}
              setView={setView}
              setTile={setTile}
            />
          </>)}
    </>
  );
}

export default App;
