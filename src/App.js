import "./App.css";
import StateTutorial from "./components/UseState/StateTutorial";
import ReducerTutorial from "./components/UseReducer/ReducerTutorial";
import EffectTutorial from "./components/UseEffect/EffectTutorial";
import RefTutorial from "./components/UseRef/RefTutorial";
import LayoutEffectTutorial from "./components/UseLayoutEffect/LayoutEffectTutorial";
import ImperativeHandle from "./components/UseImperativeHandle/ImperativeHandle";
import ContextTutorial from "./UseContext/ContextTutorial";
import MemoTutorial from "./components/UseMemo/MemoTutorial";
import CallBackTutorial from "./components/UseCallback/CallbackTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <hr />
      <ReducerTutorial />
      <hr />
      <EffectTutorial />
      <hr />
      <RefTutorial />
      <hr />
      <LayoutEffectTutorial />
      <hr />
      <ImperativeHandle />
      <hr />
      <ContextTutorial />
      <hr />
      <MemoTutorial />
      <hr />
      <CallBackTutorial />
    </div>
  );
}

export default App;
