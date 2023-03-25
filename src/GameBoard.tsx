import { styled } from "emotion-solid";
import { Component, createEffect, createSignal, For, Index, on } from "solid-js";
import { Gameboard, GameCell, GameRow } from "./styledComponents/Styled";
import { createStore } from "solid-js/store";


  
  export const GameBoard: Component = () => { 
  
      const [board, setBoard] = createStore([[1, 2, 0], [0, 0, 0], [0, 0, 0]])
      
      const increment = (row: number, cell: number) => {
        console.log(row, cell)  
          console.log(board[row][cell])
          setBoard((board) => {
            board[row][cell] = board[row][cell] + 1
            return board
          })
          
      }

      
  
    return (
        <Gameboard >
            
            <Index each={board}>
                {(row, indexs) => (
                    <GameRow>
                        <Index each={row()}>
                            {(cell, index) => (
                                <GameCell onClick={() => increment(indexs, index)} >
                                    {board[indexs][index]}
                                </GameCell>
                            )}
                        </Index>
                    </GameRow>
                )}
           </Index>
      </Gameboard>
    );
  };
  