import React from 'react';
import './App.css';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import About from "./about/About";

function App() {
  return (
      <div className="App">
          <Main/>
          <About/>
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
      </div>
  );
}

export default App;
