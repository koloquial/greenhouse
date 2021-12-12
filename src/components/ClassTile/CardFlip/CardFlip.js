import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Info from './Info'

const CardFlip = ({ tile }) => {
    const [flip, setFlip] = useState(false);

    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">

            <div style={{cursor: 'pointer'}} onClick={() => setFlip(true)}>
                    <img 
                    src={tile.getImage()} 
                    style={{width: '100%', opacity: .7, margin: '0'}} 
                    title={`Image by ${tile.credit} at Pixabay`} 
                />
            </div>

            <Info tile={tile} setFlip={setFlip} />
          
        </ReactCardFlip>
    )
}

export default CardFlip;