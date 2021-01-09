import { ThemeProvider } from "@material-ui/styles";

import theme from "../src/UI/theme";
import PlayersPage from "../src/Components/Page1";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PlayersPage />
    </ThemeProvider>
  );
}

export default App;
