import { Route, Routes } from 'react-router-dom';
import './App.css';
import Arithemetic from './components/Arithemetic';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/arithemetic" element={<Arithemetic />} />
      </Routes>
    </div>
  );
}

export default App;
