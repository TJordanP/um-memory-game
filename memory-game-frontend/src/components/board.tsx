import { useContext, type JSX } from "react";
import GameModelContext from "../context/GameModelContext";

interface BoardParams{
  style?: React.CSSProperties;
  children: JSX.Element[];
  ref?: React.Ref<HTMLDivElement>;
};
function Board({children,style,ref}:BoardParams){
  const gameModel = useContext(GameModelContext);
  const size = gameModel.getGridOrder();
  const defaultStyle:React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${size},1fr)`,
    gridTemplateRows: `repeat(${size},1fr)`,
    gap: '0px',
};
  return (
    <div style={{...defaultStyle,...style}} ref={ref}>
      {children}
    </div>
  );
}

export default Board;
