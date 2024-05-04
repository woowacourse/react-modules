import './App.css';
import { CardNumbers, CardExpiryDate, Issuer, CardHolder, CardPassword, CardCVC } from './components';

function App() {
  return (
    <div id="app">
      <CardHolder />
      <CardCVC />
      <Issuer />
      <CardPassword />
      <CardNumbers />
      <CardExpiryDate />
    </div>
  );
}

export default App;
