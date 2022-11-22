import './App.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Add from './pages/Add';
import Delete from './pages/Delete';
import Update from './pages/Update';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Routes>
        <Route path="/Properties" element={<Properties />} />
      </Routes>

      <Routes>
        <Route path="/Add" element={<Add />} />
      </Routes>

      <Routes>
        <Route path="/Update" element={<Update />} />
      </Routes>

      <Routes>
        <Route path="/Delete" element={<Delete />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
