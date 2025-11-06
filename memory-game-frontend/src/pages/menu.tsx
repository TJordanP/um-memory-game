import type React from "react";

import './menu.css';
import './menu-animated-background.css';
import Marquee from "react-fast-marquee";

function AnimatedBackground({style}:{style?:React.CSSProperties}){
    return (
        <div className="wrapper" style={style}>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
        </div>
    );
}

function Menu(){
    const rootLayoutStyles:React.CSSProperties = {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '3rem'

    };
    const layoutStyles:React.CSSProperties = {
        height: '70%',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '2rem'
    };

    const buttonStyles:React.CSSProperties = {
        flex: 1,
        width:'100%',
        fontFamily:'monospace',
        fontSize:'2rem',
        borderStyle: 'solid',
        borderColor: 'pink',
        borderWidth: '4px',
        opacity: '0.7',
    };

    const stackStyles: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    };

    return (
        <div style={{position: 'relative',top: 0,left: 0,width: '100%',height: '100%',overflow: 'hidden'}}>
            <AnimatedBackground style={stackStyles}/>
            <div style={{...rootLayoutStyles,...stackStyles}}>
                <div style={{fontFamily:'cursive',fontSize: '4rem'}}>GEMÖ</div>
                <div style={layoutStyles}>
                    {
                        ['PLAY','AI SIMULATION','OPTIONS','ABOUT']
                        .map((label,i) => <button key={i} className='menu-button' style={buttonStyles}>{label}</button>)
                    }
                </div>
                <Marquee style={{fontFamily: 'sans-serif'}} pauseOnClick={true}>Written by Tchinda Jordan, Nov 2025</Marquee>
            </div>
        </div>
        
    );
}

export default Menu;