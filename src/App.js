import Timer from './components/Timer/Timer.js';
import Time from "./components/Time/Time";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <Timer>
      <Time />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Timer>
  );
};

export default App;
