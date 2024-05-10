import './App.css';
import { CardNumbers, CardExpiryDate, CardIssuer, CardHolder, CardPassword, CardCVC } from './components';

function App() {
  return (
    <div id="app">
      <CardHolder />
      <CardCVC />
      <CardIssuer />
      <CardPassword />
      <CardNumbers />
      <CardExpiryDate />
    </div>
  );
}

export default App;
