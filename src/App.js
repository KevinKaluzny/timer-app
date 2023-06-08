import Container from './components/Container/Container.js';
import Time from "./components/Time/Time";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <Container>
      <Time />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Container>
  );
};

export default App;
