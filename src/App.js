import React,{useState,useEffect} from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SKills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Projects';
import Dashboard from './components/Dashboard';


function App(){
  const [darkMode,setDarkMode]=useState(false);
  useEffect(()=>{
    document.body.className=darkMode?"dark":"";
  },[darkMode]);





  return ( <> 
  <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
  <Hero />
  <About />
  <Project />
  <Dashboard/>
  <SKills />
  <Contact />
  <Footer />
  </>
  );
}
export default App;