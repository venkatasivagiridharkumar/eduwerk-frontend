import './App.css';
import {Routes,Route} from "react-router-dom";
import CodePlayground from './components/CodePlayground';
import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/Login";
import StudentRegister from './components/StudentRegister';
import Footer from './components/Footer';
import Program from './components/Program';


function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={<><Header/><Home/><Footer/></>}/>
     <Route path="/program" element={<><Header/><Program/><Footer/></>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/code-playground" element={<CodePlayground/>}/>
     <Route path="/register" element={<StudentRegister/>}/>
    </Routes>
    </>
  );
}

export default App;
