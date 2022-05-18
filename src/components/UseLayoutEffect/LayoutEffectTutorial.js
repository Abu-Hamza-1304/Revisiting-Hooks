import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);

  return (
    <div className="App">
      <h2>UseLayoutEffect Example</h2>
      <input ref={inputRef} value="Abu" style={{ width: 200, height: 40 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
