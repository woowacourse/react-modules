import './App.css';
import { useCardNumbers } from 'pongda-payments-hooks';
import getCardNetwork from './useCardNumbers/getCardNetwork';
function App() {
  const cardNumbersHook = useCardNumbers();
  console.log(getCardNetwork('4553 3333 3333 33444'));
  return (
    <>
      <h1>Hooks Modules</h1>
    </>
  );
}

export default App;
