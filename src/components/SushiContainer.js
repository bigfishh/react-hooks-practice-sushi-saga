import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, handleSushiEaten}) {

  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(4)

  const sushiDisplay = sushis.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} handleSushiEaten={handleSushiEaten}/>
  }).slice(firstIndex, lastIndex)

  function handleMoreButtonClick() {
    if (lastIndex < sushis.length -1) {
      setFirstIndex(firstIndex + 4)
      setLastIndex(lastIndex + 4)
    } else {
      setFirstIndex(0)
      setLastIndex(4)
    }
  }

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton handleMoreButtonClick={handleMoreButtonClick}/>
    </div>
  );
}

export default SushiContainer;
