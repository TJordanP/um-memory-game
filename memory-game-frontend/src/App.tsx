import './App.css';

import { type MemoryGameBlueprint } from './models/MemoryGame';

import Game from './components/game';
import Menu from './pages/menu';

const blueprint:MemoryGameBlueprint =  {cards: [
    {count:3,consecutiveErrorsAllowed:0,penalizeType: 'current'},
    {count:3,consecutiveErrorsAllowed:0,penalizeType: 'current'},
    {count:3,consecutiveErrorsAllowed:0,penalizeType: 'current'},
],penalizeOnNullCards: true};


const colors = [
  'red',
  'green',
  'blue',
  'violet',
]

function App() {
  /*<Game cardCSSBackgrounds={colors} nullCardCSSBackground='' hiddenCardCSSBackground='black' blueprint={blueprint} />*/
  return (
    <div style={{width: '100vw',height: '100vh',display: 'flex',justifyContent:'center',userSelect: 'none'}}>
      <div style={{width: '100%',height: '100%',maxWidth: '640px',display: 'flex'}}>
        <Menu />
      </div>
    </div>
    
  );
}

export default App
