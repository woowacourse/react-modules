import './App.css';
import { useCardNumbers } from './lib';

function App() {
  const { cardNumbers, validationResults, handleCardNumbersChange } =
    useCardNumbers({ part1: '', part2: '', part3: '', part4: '' });

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        type="text"
        name="part1"
        onChange={(event) =>
          handleCardNumbersChange('part1', event.target.value, {
            skipValidation: true,
          })
        }
        value={cardNumbers.part1}
      />
      <p>{validationResults.part1.isValid}</p>
      <input
        type="text"
        name="part2"
        onChange={(event) =>
          handleCardNumbersChange('part2', event.target.value, {
            skipValidation: true,
          })
        }
        value={cardNumbers.part2}
      />
      <p>{validationResults.part2.isValid}</p>{' '}
      <input
        type="text"
        name="part3"
        onChange={(event) =>
          handleCardNumbersChange('part3', event.target.value)
        }
        value={cardNumbers.part3}
      />
      <p>{validationResults.part3.isValid}</p>{' '}
      <input
        type="text"
        name="part4"
        onChange={(event) =>
          handleCardNumbersChange('part4', event.target.value)
        }
        value={cardNumbers.part4}
      />
      <p>{validationResults.part4.isValid}</p>
      <p>{validationResults.part1.errorMessage}</p>
      <p>{validationResults.part2.errorMessage}</p>
      <p>{validationResults.part3.errorMessage}</p>
      <p>{validationResults.part4.errorMessage}</p>
    </>
  );
}

export default App;
