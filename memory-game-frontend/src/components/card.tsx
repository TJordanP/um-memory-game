import { useContext, type JSX, type MouseEventHandler } from "react";
import GameModelContext from "../contexts/GameModelContext";

import { type MemoryGameCard, MemoryGame } from '../models/MemoryGame';


interface CardParams{
  style?: React.CSSProperties;
  children: JSX.Element;
  card: MemoryGameCard;
  className?: string;
  onClick?: MouseEventHandler;
};

function Card({children,style,card,className,onClick} : CardParams){
  const [ col , row ]= card.position;
  const defaultStyle: React.CSSProperties = {
    gridColumn: col+1,
    gridRow: row+1,
  };
  return (
    <button tabIndex={row*3 + col} className={className || ''} style={Object.assign(defaultStyle,style)} key={card.toId()} onClick={onClick}>
      {children}
    </button>
  );
}

export default Card;