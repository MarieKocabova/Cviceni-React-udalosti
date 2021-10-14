import React from "react";
import hradUrl from "./hrad.svg";

// Zadání:
// Po najetí myši  na obrázek (událost `onMouseEnter`)
// zobraz bublinu s textem „Na hradě je myš!“
// Bublina = alert v prohlížeči.

const Uloha2 = () => {
  const handleMouseenter = () => {
    alert("Na hradě je myš");
  };

  return <img src={hradUrl} width={60} height={60} alt="hrad" onMouseEnter={handleMouseenter} />;
};

export default Uloha2;
