import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Questions from './components/Questions';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/CF-Speedrun" element={<Questions />} />
          <Route path="/CF-Speedrun/about" element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
