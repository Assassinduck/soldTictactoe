import { styled } from "emotion-solid";
import { Accessor, Component, createEffect, createSignal, For, Index, on } from "solid-js";
import { Gameboard, GameCell, GameRow } from "./styledComponents/Styled";
import { createStore } from "solid-js/store";


  
  export const GameBoard: Component = () => { 
  
      const [board, setBoard] = createSignal([["", "", ""], ["", "", ""], ["", "", ""]], { equals: false })
      const [currentPlayersTurn, setCurrentPlayersTurn] = createSignal<"X" | "Y">("X")
      const [isGameFinished, setIsGameFinished] = createSignal(false)

      const startGame = () => {
        setIsGameFinished(false)
          setBoard([["", "", ""], ["", "", ""], ["", "", ""]])
      }
      
      const setPlayerSymbol = (row: number, cell: number) => {
          const currentBoard = board()
          currentBoard[row][cell] = currentPlayersTurn()
          setBoard(currentBoard)
          const isGameOver = checkBoard(row, cell)
          console.log(isGameOver)
          if (isGameOver) {
              setBoard([["", "", ""], ["", "", ""], ["", "", ""]])
              setIsGameFinished(true)
              return
          }
          switchTurns()
      }

      const switchTurns = () => {
          const player = () => currentPlayersTurn()
          switch (player()) {
            case "X":
                 return setCurrentPlayersTurn("Y")
              case "Y":
                return setCurrentPlayersTurn("X")
            default:
                return
          }
      }

      const checkBoard = (row: number, cell: number) => {
          const boardState = () => board()
          const player = () => currentPlayersTurn()

          
          const singleRow = boardState()[row].every((elem) => {
            return elem === player()
          })

        if(singleRow) return true

          const crossRowStraight = () => {
              return (
                     boardState()[0][cell] === player()
                  && boardState()[1][cell] === player()
                  && boardState()[2][cell] === player()
              )  
          }

          if (crossRowStraight()) return true
          
          const crossMiddleBoard = () => {
              if ((boardState()[0][0] === player() && boardState()[1][1] === player() && boardState()[2][2] === player()) ||
                  (boardState()[0][2] === player() && boardState()[1][1] === player() && boardState()[2][0] === player()))
                  return true
          }

          if (crossMiddleBoard()) return true
          
         return false
      }

      
  
    return (
        <Gameboard >
            {isGameFinished() && "congrats to player: "  + currentPlayersTurn() }
            <Index each={board()}>
                {(row, indexs) => (
                    <GameRow>
                        <Index each={row()}>
                            {(cell, index) => (
                                <GameCell onClick={() => setPlayerSymbol(indexs, index)} >
                                    {board()[indexs][index]}
                                </GameCell>
                            )}
                        </Index>
                    </GameRow>
                )}
           </Index>
      </Gameboard>
    );
  };
  