import './App.css';
import { CardNumbers, CardExpiryDate, Issuer, CardHolder, CardPassword, CardCVC } from './components';

function App() {
  return (
    <>
      <CardHolder />
      <CardCVC />
      <Issuer />
      <CardPassword />
      <CardNumbers />
      <CardExpiryDate />
    </>
  );
}

export default App;
