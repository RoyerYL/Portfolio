import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <footer>
        <p>Versión 1.9.0 beta &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
