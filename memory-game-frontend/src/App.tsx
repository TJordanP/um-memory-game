import './App.css';

import { type MemoryGameBlueprint } from './models/MemoryGame';

import Game from './components/game';


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
  return (
    <Game cardCSSBackgrounds={colors} nullCardCSSBackground='' hiddenCardCSSBackground='black' blueprint={blueprint} />
  )
}

export default App
