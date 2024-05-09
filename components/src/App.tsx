import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "@/style/global";
import { theme } from "@/style/theme";
import AlertModal from "./lib/Modal/AlertModal/AlertModal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AlertModal
        isOpen={true}
        onClose={() => {}}
        onConfirm={() => {}}
        title="aa"
        message="aa"
      />
    </ThemeProvider>
  );
}

export default App;
