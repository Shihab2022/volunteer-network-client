import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Register from './Pages/Login/Register';
import Header from './Pages/Sheard/Header';

function App() {
  return (
    <div>
  <Header></Header>
  <Routes>
<Route path='/' element={ <Home></Home>}></Route>
<Route path='/home' element={ <Home></Home>}></Route>
<Route path='/register' element={<Register></Register>}></Route>

  </Routes>
    
     
    </div>
  );
}

export default App;
