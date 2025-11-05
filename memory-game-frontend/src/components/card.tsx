import { useContext, type JSX, type MouseEventHandler } from "react";
import GameModelContext from "../contexts/GameModelContext";

import { type MemoryGameCard, MemoryGame } from '../models/MemoryGame';


interface CardParams{
  style?: React.CSSProperties;
  children: JSX.Element;
  card: MemoryGameCard;
  className?: string;
  onClick?: MouseEventHandler;
  ref?: React.Ref<HTMLButtonElement>;
  disabled?: boolean;
};

function Card({children,style,card,className,onClick,ref,disabled} : CardParams){
  const [ col , row ]= card.position;
  const defaultStyle: React.CSSProperties = {
    gridColumn: col+1,
    gridRow: row+1,
  };
  return (
    <button 
        ref={ref}
        tabIndex={row*3 + col}
        className={className || ''}
        style={{...defaultStyle,...style}}
        key={card.toId()}
        onClick={onClick}
        disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Card;