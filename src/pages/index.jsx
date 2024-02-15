import React, { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import games from "./game";

const Index = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex >= games.length) {
        newIndex -= games.length;
      } else if (newIndex < 0) {
        newIndex += games.length;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        plusSlides(-1);
      } else if (event.key === "ArrowRight") {
        plusSlides(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1 className="TitleOfThePage">Video Game Cards</h1>
      <div className="games-container">
        {games.map((game, index) => (
          <GameCard
            key={index}
            game={game}
            isSelected={index === slideIndex}
            onClick={() => currentSlide(index)}
          />
        ))}
      </div>
      <div className="arrow left" onClick={() => plusSlides(-1)}>
        <img src="/assets/arrows2.png" alt="<" />
      </div>
      <div className="arrow right" onClick={() => plusSlides(1)}>
        <img src="/assets/arrow1.png" alt=">" />
      </div>
    </div>
  );
};

export default Index;
