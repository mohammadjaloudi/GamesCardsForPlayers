import React from "react";

const GameCard = ({ game, isSelected, onClick }) => {
  const splitText = (text) => {
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (let i = 0; i < words.length; i++) {
      if (i > 0 && i % 20 === 0) {
        lines.push(line);
        line = "";
      }
      line += words[i] + " ";
    }
    lines.push(line);
    return lines;
  };

  return (
    <div
      className={`game-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={game.image} alt={game.title} />
      {isSelected && (
        <>
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h2>{game.title}</h2>
          </a>
          {splitText(game.description).map((line, index) => (
            <p key={index} className="Des">
              {line}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default GameCard;
