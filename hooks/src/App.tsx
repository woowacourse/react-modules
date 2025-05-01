import './App.css';
import { useCardNumbers } from 'pongda-payments-hooks';
function App() {
  const cardNumbersHook = useCardNumbers();
  console.log(cardNumbersHook);
  return (
    <>
      <h1>Hooks Modules</h1>
    </>
  );
}

export default App;
