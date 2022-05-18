import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Abu");

  let changeName = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h2>UseState Example</h2>
      <input placeholder="enter something..." onChange={changeName} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
