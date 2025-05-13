import CardForm from "./components/CardForm";
import useCardForm, { CardFormValues } from "./lib/hooks/useCardForm";
import "./App.css";

function App() {
  const cardForm = useCardForm({
    formatOptions: { placeholderChar: "X", splitter: " " },
    onSubmit: (values: CardFormValues) => {
      alert(`카드 정보가 성공적으로 등록되었습니다: ${JSON.stringify(values)}`);
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>신용카드 입력 폼</h1>
      </header>
      <main>
        <CardForm cardForm={cardForm} />
      </main>
    </div>
  );
}

export default App;
