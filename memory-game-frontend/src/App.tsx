import './App.css';

import { type MemoryGameBlueprint } from './models/MemoryGame';

import Game from './components/game';
import Menu from './pages/menu';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

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
    <div style={{width: '100vw',height: '100vh',display: 'flex',justifyContent:'center',userSelect: 'none'}}>
      <div style={{width: '100%',height: '100%',maxWidth: '640px',display: 'flex'}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/menu'/>}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/game' element={<Game cardCSSBackgrounds={colors} nullCardCSSBackground='' hiddenCardCSSBackground='black' blueprint={blueprint} />}/>
          </Routes>
          
        </BrowserRouter>
      </div>
    </div>
    
  );
}

export default App
