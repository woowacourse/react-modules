import './App.css';
import { CardNumbers, CardExpiryDate, CardIssuer, CardHolder, CardPassword, CardCVC } from './components';
import CardBrand from './components/CardBrand';
import CardType from './components/CardType';

function App() {
  return (
    <div id="app">
      <CardBrand />
      <CardHolder />
      <CardType />
      <CardCVC />
      <CardIssuer />
      <CardPassword />
      <CardNumbers />
      <CardExpiryDate />
    </div>
  );
}

export default App;
