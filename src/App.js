import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './pages/Home/Index';
import About from './pages/About/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
