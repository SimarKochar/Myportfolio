import { useState, useEffect } from "react";

const StarBackground = () => {
  
    const[stars, setStars] = useState([]);
    const[meteors, setMeteors] = useState([]);
    
    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
          newStars.push({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
          });
        }

        setStars(newStars);
    } 

    

    const generateMeteors = () => {
      const numberOfMeteors = 4; // Number of meteors to generate
      const newMeteors = [];

      for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
          id: i,
          size: Math.random() * 2 + 1, // Random size
          x: Math.random() * 100, // Random horizontal position (0% to 100%)
          y: Math.random() * -20, // Random vertical position above the screen (-20% to 0%)
          delay: Math.random() * 5, // Random animation delay
          animationDuration: Math.random() * 3 + 2, // Random animation duration (2s to 5s)
        });
      }

      setMeteors(newMeteors); // Update the meteors state
    };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: `${meteor.size * 50}px`,
              height: `${meteor.size * 2}px`,
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
