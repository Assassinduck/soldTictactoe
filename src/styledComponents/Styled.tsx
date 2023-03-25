import { styled } from "emotion-solid";
import { Component } from "solid-js";

interface GameBoardProps {
  children?: any;
  onClick?: () => void;
  }
  
  
const GameBoardStyle = styled("div")<GameBoardProps>(
    {
      "width": "600px",
      "height": "600px",
      "border": "1px solid black",
      "display": "flex",
    "backgroundColor": "white",
      "flexDirection": "column",
      
  
      
    }
  )
  
export const Gameboard: Component<GameBoardProps> = (props) => { 
    return (
      <GameBoardStyle {...props} >
        {props.children}
      </GameBoardStyle>
    );
}
  


const GameCellStyle = styled("button")<GameBoardProps>(
  {
    "all": "unset",
    "width": "200px",
    "height": "200px",
    "border": "1px solid black",
    "textAlign":"center"
    
  }
)

export const GameCell: Component<GameBoardProps> = (props) => { 
  return (
    <GameCellStyle {...props} >
      {props.children}
    </GameCellStyle>
  );
}

const GameRowStyle = styled("div")<GameBoardProps>(
  {
    "width": "600px",
    "height": "200px",
    "border": "1px solid black",
    "display": "flex",
    "backgroundColor": "white",
    "flexDirection": "row",
  }
)

export const GameRow: Component<GameBoardProps> = (props) => {
  return (
    <GameRowStyle {...props} >
      {props.children}
    </GameRowStyle>
  );
}