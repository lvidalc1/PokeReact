import logo from './logo.svg';
import './App.css';
import Pokemon from './components/pokemon';
import PokeLista from './components/pokeLista';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokeLista />}></Route>
        <Route path='/pokemon/:id' element={<Pokemon />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;