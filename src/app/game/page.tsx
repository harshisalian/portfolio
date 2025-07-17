"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LEDScroller from "../LEDScroller";

// 0 = empty, 1 = wall, 2 = player, 3 = destination
const initialBoard = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Correction: Open a path from (1,1) to (1,12)
// We'll open up the second row and connect it to the lower rows for a valid path
const correctedBoard = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const cellSize = 32;

export default function Game() {
  const [board] = useState(correctedBoard);
  const [playerPos, setPlayerPos] = useState({ row: 6, col: 3 });
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
    <div className="min-h-screen flex flex-col items-center justify-center pt-12 game-bg" style={{ position: 'relative' }}>
      {/* LED Scroller (absolute at top) */}
      <div style={{ position: 'absolute', top: '-20px', left: 0, width: '100%', zIndex: 10 }}>
        <div className="w-full flex justify-center my-8" style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
          <LEDScroller text="Will Harshitha finally stop freeloading on her parents’ Wi-Fi?
 | Is Harshitha about to downgrade from “broke student” to “broke employee”?
 | Will Harshitha’s “nap all day” era be replaced by “cry at work” era?
 | Is Harshitha ready to sell her soul for a paycheck and free coffee?
 | Will Harshitha soon master the art of looking busy while doing nothing?
 | Is Harshitha about to join the “Reply All” and “Circle Back” cult?
 | Will Harshitha’s LinkedIn finally get its “Open to Work” badge removed?
 | Is Harshitha ready to be underpaid, overworked, and politely gaslit by HR?" />
        </div>
      </div>
      {/* Game puzzle message box */}
      <div className="w-full flex justify-center">
        <div className="bg-[#232b45] text-yellow-300 rounded-lg px-8 py-4 pixel-font text-2xl font-bold shadow-lg border-2 border-[#181e34] mb-6 max-w-2xl text-center">
          Will Harshitha’s bank account stop crying soon?
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-start gap-8">
        <div className="mt-4 flex flex-col items-center text-left min-w-[220px] max-w-[220px]" style={{ marginLeft: '-250px' }}>
          <div className="text-gray-400">Use arrow keys to move the character.</div>
          {won && (
            <div className="mt-8 bg-[#232b45] text-green-400 rounded-2xl px-6 py-4 pixel-font text-2xl font-bold shadow-2xl border-4 border-green-400 text-center animate-float flex flex-col items-center">
              <Image src="/victory.png" alt="Victory" width={60} height={60} className="mb-2" />
              You Win! 🎉
            </div>
          )}
        </div>
        <div
          ref={boardRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="outline-none game-puzzle-box"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${board[0].length}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${board.length}, ${cellSize}px)`,
            gap: 2,
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
      </div>
    </div>
  );
} 