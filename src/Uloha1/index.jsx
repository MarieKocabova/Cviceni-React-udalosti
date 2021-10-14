import React from "react";

// Zadání:
// Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.
// "Bublinou" se myslí alert v prohlížeči.

const Uloha1 = () => {
  const handleOnclick = () => {
    alert("Ahoj");
  };

  return <button onClick={handleOnclick}>Ukaž bublinu</button>;
};

export default Uloha1;
