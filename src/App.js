import Header from "./components/ui/Header"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./components/ui/theme"
import { BrowserRouter, Route,Switch} from "react-router-dom"

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    `<Header />
      <Switch>
        <Route path="/home" component={()=><div>Home</div>} />
        <Route path="/service" component={()=><div>service</div>} />
        <Route path="/custom-software" component={()=><div>custom-software</div>} />
        <Route path="/mobile-development" component={()=><div>mobile development</div>} />
        <Route path="/website-development" component={()=><div>Web Devlopment app</div>} />
        <Route path="/revolution" component={()=><div>revolution</div>} />
        <Route path="/contact" component={()=><div>contact</div>} />
        <Route path="/estimate" component={()=><div>estimate</div>} />
        <Route path="/about" component={()=><div>About</div>} />
       </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

export default App;
