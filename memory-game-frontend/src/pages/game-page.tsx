
import Game from '../components/game';
import './game-animated-background.css';

function AnimatedBackground({style}:{style?:React.CSSProperties}){
    return (
        <div className='game-background' style={{...style}}/>
    );
}

function GamePage({...gameProps}:Parameters<typeof Game>[0]){
    const stackStyles: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    };
    return (
        <div style={{position: 'relative',top: 0,left: 0, width: '100%',height: '100%',overflow:'hidden'}}>
            <AnimatedBackground style={{...stackStyles}}/>
            <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center', ...stackStyles}}>
                <Game {...gameProps} />
            </div>
        </div>
    );
}

export default GamePage;