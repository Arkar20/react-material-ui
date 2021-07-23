import { BrowserRouter, Route, Switch } from "react-router-dom"
import React ,{useState} from "react"

import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Mobile from "./components/Mobile"
import Service from "./components/Service"
import { ThemeProvider } from '@material-ui/core/styles';
import Websitedev from "./components/Websitedev"
import axios from "axios"
import theme from "./components/ui/theme"

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const handlechange = (e,value) => {
    setValue(value)
  }
  const props = {value, setValue, selectedIndex, setSelectedIndex,handlechange}
 
  const handleClick = (e) => {
    e.preventDefault()
    console.log('clicked')
  }
  return(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header {...props}/>
          <Switch>
            <Route path="/home" component={Home} /> 
            <Route path="/service" component={Service} />
            <Route path="/custom-software" component={() => <div>custom-software</div>} />
            <Route path="/mobile-development" component={Mobile} />
            <Route path="/website-development" component={Websitedev} />
            <Route path="/revolution" component={() => <div>revolution</div>} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/estimate" component={() => <div>estimate</div>} />
          <Route path="/about" component={AboutUs} />
          </Switch>
        <Footer {...props}/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
