import './App.css';
import { CardCVC, CardExpiryDate, CardHolder, CardNumbers, CardPassword, Issuer } from './components';

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
