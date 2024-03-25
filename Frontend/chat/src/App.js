
import './App.css';
import {Routes,Route} from "react-router-dom"
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import Home from './Component/Home';




function App() {

  
   
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path = "/home" element={<Home/>}/>
      </Routes>
      <Toaster/>
      
      
    </div>
  );
}

export default App;
