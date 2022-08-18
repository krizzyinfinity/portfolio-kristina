
import { useContext } from 'react';
import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import PortfolioList from './components/portfolioList/PortfolioList';
import { Toggle } from './components/toggle/Toggle';
import { ThemeContext} from './context';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    
   <>
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>

     <Header />
     <Toggle />
     <Main />
    
     <About />
    
     <PortfolioList />
     <Contact />
    
   </div>
   </>
  
  );
}

export default App;
