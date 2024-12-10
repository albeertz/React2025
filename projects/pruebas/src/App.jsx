import './App.css'
import Timer from "./components/Timer";
import WindowResizeListener from "./components/WindowResizeListener";


const App = () => {
  return (
    <div>
      <h1>Mi Temporizador</h1>
      <Timer />
      <WindowResizeListener />
    </div>
  );
};

export default App;
