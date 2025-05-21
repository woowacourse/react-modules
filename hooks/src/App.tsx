import './App.css';
import { useCardNumbers } from './lib';

function App() {
  const { cardNumbers, validationResults, cardBrand, handleCardNumbersChange } =
    useCardNumbers([
      { name: 'part1', length: 4 },
      { name: 'part2', length: 4 },
      { name: 'part3', length: 4 },
      { name: 'part4', length: 4 },
    ]);

  return (
    <>
      <h1>Hooks Modules</h1>
      {(['part1', 'part2', 'part3', 'part4'] as const).map((key) => {
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
      <p>{cardBrand}</p>
    </>
  );
}

export default App;
