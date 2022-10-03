import './App.css';
import Header from './components/Header.jsx';
import Carousel from './components/Carousel.jsx';
import Tutorials from './components/Tutorials.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='container-fluid'>
        <Carousel/>
        <Tutorials/>
      </main>
      
    </div>
  );
}

export default App;
