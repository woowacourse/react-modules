import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "@/style/global";
import { theme } from "@/style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
