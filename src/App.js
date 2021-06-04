import Header from "./components/ui/Header"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./components/ui/theme"
const App = () => (
  <ThemeProvider theme={theme}>
  <Header />
   heelo
  </ThemeProvider>
)

export default App;
