
import './App.css';
import {Routes,Route} from "react-router-dom"
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signup/Signup';
import Chat from './Component/Chatarea/Chat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
