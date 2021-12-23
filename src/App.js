import './App.css';
import {BrowserRouter as Router, Route, Routes, Redirect, Navigate} from "react-router-dom";
import Banner from "./pages/Banner"
import Home from './pages/Home'
import Register from './pages/Register'
import Skills from './pages/Skills';       
import Success from './pages/Success';
import Devlist from './pages/Devlist';
import RegisterEmail from './pages/RegisterEmail';

function App() {
  return (
     <div className="App">
      <Router>

        <Routes>

          <Route path='/' exact element={<Banner />} />
          <Route path="/home" exact element={<Home />}/>

          <Route path="/register" exact element={<Register />}/>
          <Route path="/register/email" exact element={<RegisterEmail />}/>
          <Route path="/skills" exact element={<Skills />}/>
            

         
          <Route path="/success" exact element={<Success />}/>
          <Route path="/devlist" exact element={<Devlist />}/>


        </Routes>

      </Router>
    </div>
  );
}

export default App;
