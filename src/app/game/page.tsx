"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// 0 = empty, 1 = wall, 2 = player, 3 = destination
const initialBoard = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3, 1],
  [1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 2, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

const cellSize = 56;

export default function Game() {
  const [board, setBoard] = useState(initialBoard);
  const [playerPos, setPlayerPos] = useState({ row: 3, col: 3 });
  const [won, setWon] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the board for keyboard events
    if (boardRef.current) boardRef.current.focus();
  }, []);

  useEffect(() => {
    // Check win condition
    if (board[playerPos.row][playerPos.col] === 3) setWon(true);
  }, [playerPos, board]);

  function movePlayer(dr: number, dc: number) {
    if (won) return;
    const { row, col } = playerPos;
    const newRow = row + dr;
    const newCol = col + dc;
    if (
      newRow < 0 ||
      newRow >= board.length ||
      newCol < 0 ||
      newCol >= board[0].length ||
      board[newRow][newCol] === 1
    ) {
      return; // Wall or out of bounds
    }
    setPlayerPos({ row: newRow, col: newCol });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowUp") movePlayer(-1, 0);
    else if (e.key === "ArrowDown") movePlayer(1, 0);
    else if (e.key === "ArrowLeft") movePlayer(0, -1);
    else if (e.key === "ArrowRight") movePlayer(0, 1);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#101624] pt-12">
      {/* Floating boxes */}
      <div className="floating-box animate-float-ltr">Floating left→right</div>
      <div className="floating-box animate-float-rtl">Floating right→left</div>
      <div className="floating-box animate-float-ttb">Floating top→bottom</div>
      <div className="floating-box animate-float-btt">Floating bottom→top</div>
      {/* Game content */}
      <h2 className="text-3xl font-bold pixel-font text-yellow-400 mb-6">Sokoban-like Game</h2>
      <div
        ref={boardRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="outline-none"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${board[0].length}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${board.length}, ${cellSize}px)`,
          gap: 2,
          background: "#232b45",
          borderRadius: 16,
          boxShadow: "0 8px 32px #232b45",
        }}
      >
        {board.map((row, r) =>
          row.map((cell, c) => {
            let content = null;
            if (playerPos.row === r && playerPos.col === c) {
              content = (
                <Image
                  src="/character-placeholder.png"
                  alt="Player"
                  width={cellSize - 8}
                  height={cellSize - 8}
                  style={{ objectFit: "contain" }}
                />
              );
            } else if (cell === 3) {
              content = (
                <Image
                  src="/destination-placeholder.png"
                  alt="Destination"
                  width={cellSize - 8}
                  height={cellSize - 8}
                  style={{ objectFit: "contain" }}
                />
              );
            }
            return (
              <div
                key={`${r}-${c}`}
                style={{
                  width: cellSize,
                  height: cellSize,
                  background:
                    cell === 1
                      ? "#181e34"
                      : cell === 3
                        ? "#232b45"
                        : "#101624",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: cell === 1 ? "2px solid #232b45" : "1px solid #232b45",
                }}
              >
                {content}
              </div>
            );
          })
        )}
      </div>
      {won && (
        <div className="mt-6 text-2xl font-bold text-green-400">You Win! 🎉</div>
      )}
      <div className="mt-4 text-gray-400">Use arrow keys to move the character.</div>
    </div>
  );
} 