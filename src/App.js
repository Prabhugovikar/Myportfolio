import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/intro";
import Services from "./components/Services/services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portofolio from "./components/Portoflio/Portofolio";
import Testmonials from "./components/Testmonials/Testmonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {

   const theme = useContext(themeContext)
   const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background : darkMode ? 'black' : '',
      color : darkMode ? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portofolio/>
      <Testmonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
