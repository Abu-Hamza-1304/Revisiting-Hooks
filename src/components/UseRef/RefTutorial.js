import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);

  const clickHandle = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h2>UseRef Example</h2>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={clickHandle}>Remove Input</button>
    </div>
  );
}

export default RefTutorial;
