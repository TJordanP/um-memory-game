import { useContext, type JSX } from "react";
import GameModelContext from "../contexts/GameModelContext";

interface BoardParams{
  style?: React.CSSProperties;
  children: JSX.Element[];
};
function Board({children,style}:BoardParams){
  const gameModel = useContext(GameModelContext);
  const size = gameModel.getGridOrder();
  const defaultStyle:React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${size},1fr)`,
    gridTemplateRows: `repeat(${size},1fr)`,
    gap: '0px',
};
  return (
    <div style={{...defaultStyle,...style}}>
      {children}
    </div>
  );
}

export default Board;
