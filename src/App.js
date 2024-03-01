import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skill from './components/skills/Skill';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <div className="App">
      <Header/>

      <main  className='main'>
        <Home/>
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
        <ScrollUp/>
      </main>
      
    </div>
  )

  }
export default App
