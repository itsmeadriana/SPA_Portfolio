import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/SectionIndex'
import Footer from './components/Footer';


function App() {

  const [sections] = useState([
    {
      name: "About"
    },
    {
      name: "Contact"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Resume"
    }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <section className="App">
        <Header className="headerNav" />
        <Nav className="nav headerNav"
          sections={sections}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}>
        </Nav>
    <main>
        <Section currentSection={currentSection} />
    </main>
        <Footer />
    </section>
  );
}

export default App;
