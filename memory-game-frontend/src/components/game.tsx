import { useMemo, useState } from 'react';
import { MemoryGame, type MemoryGameBlueprint } from '../models/MemoryGame';

import GameModelContext from '../contexts/GameModelContext';
import Board from '../components/board';
import Card from '../components/card';

import './game.css';

interface GameParams{
  /*style?: React.CSSProperties;*/
  blueprint: MemoryGameBlueprint;
  
  hiddenCardCSSBackground: string;
  cardCSSBackgrounds: string[];
  nullCardCSSBackground: string;
};

function Game({blueprint,hiddenCardCSSBackground,cardCSSBackgrounds,nullCardCSSBackground}:GameParams){
  const gameModel = useMemo(() => new MemoryGame(blueprint),[blueprint]);

  const [ val , update ] = useState(false);

  const boardStyles:React.CSSProperties = {
    width: '400px',
    height: '400px',
    borderStyle: 'double',
    borderWidth: '10px',
    borderRadius: '20px',
    padding: '1rem',
    gap: '1rem',
  };

  const cardStyles: React.CSSProperties = {
    borderStyle: 'none',
  };

  return (
    <GameModelContext.Provider value={gameModel}>
      <Board style={boardStyles}>
        {
          gameModel.getCards().map((card,i) => {
            const blueprintIndex = blueprint.cards.indexOf(card.blueprint);
            const background = card.visible ? cardCSSBackgrounds[blueprintIndex] : hiddenCardCSSBackground;

            return (
                <Card 
                    card={card} 
                    style={{...cardStyles,background}}
                    className='game-card'
                    onClick={async e => {
                        await gameModel.openCard(...card.position);
                        update(!val);
                        
                        setTimeout(() => {
                            if (gameModel.hasWonGame()){
                                alert('BINGO');
                            }
                        },0);
                    }}
                >
                    <></>
                </Card>
            );
          })
        }
      </Board>
    </GameModelContext.Provider>
  )
}

export default Game;
