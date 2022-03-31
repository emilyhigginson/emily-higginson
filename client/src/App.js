import './App.css'
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Skills from './Skills'

function App() {
  return (
    <div className="App">
    <Home/> 
    <About/>
    <Projects/>
    <Skills/>
    <Blog/>
</div>
  );
}

export default App;
