import React from "react";

function MoreButton({handleMoreButtonClick}) {

  function handleClick() {
    handleMoreButtonClick()
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
