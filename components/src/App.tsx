import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "@/style/global";
import { theme } from "@/style/theme";
import { Modal } from "./lib";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Modal position="bottom" isOpen={true} onClose={() => {}}>
        <Modal.Content>:)</Modal.Content>
      </Modal>
    </ThemeProvider>
  );
}

export default App;
