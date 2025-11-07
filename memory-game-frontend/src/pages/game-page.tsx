
import Game from '../components/game';

function GamePage({...gameProps}:Parameters<typeof Game>[0]){
    return (
        <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            <Game {...gameProps} />
        </div>
    );
}

export default GamePage;