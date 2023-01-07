import { Route, Routes } from 'react-router-dom';
import Discover from '../../pages/Discover';
import './App.css';

function App() {
  return(
    <Routes>
      <Route path='/discover' element={<Discover />}></Route>
      <Route path='/' element={<Discover />}></Route>
    </Routes>
  );
}

export default App;
