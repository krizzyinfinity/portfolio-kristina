import React from "react";
import ReactDOM from "react-dom";
import { Contact } from "./components/contact/Contact";
import { About } from "./components/about/About";
import PortfolioList from "./components/portfolioList/PortfolioList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context";


ReactDOM.render(
 <ThemeProvider>
    <Router>
      
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolioList" element={<PortfolioList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </Router>
    </ThemeProvider>,
  document.getElementById("root")
);
