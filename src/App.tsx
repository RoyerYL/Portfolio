import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <footer>
        <p>Versión 1.0.0 &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
