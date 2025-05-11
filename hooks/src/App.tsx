import './App.css';
import { useCardNumbers } from './lib';

function App() {
  const { cardNumbers, validationResults, brand, handleCardNumbersChange } =
    useCardNumbers([
      { name: 'part1', length: 4 },
      { name: 'part2', length: 4 },
      { name: 'part3', length: 4 },
      { name: 'part4', length: 4 },
    ]);

  return (
    <>
      <h1>Hooks Modules</h1>
      {...Object.keys(cardNumbers).map((key) => {
        return (
          <>
            <input
              type="text"
              name={key}
              onChange={(event) =>
                handleCardNumbersChange(key, event.target.value)
              }
              value={cardNumbers[key]}
            />
            <p>{validationResults[key].isValid}</p>
          </>
        );
      })}

      <p>{validationResults.part1.errorMessage}</p>
      <p>{validationResults.part2.errorMessage}</p>
      <p>{validationResults.part3.errorMessage}</p>
      <p>{brand}</p>
    </>
  );
}

export default App;
