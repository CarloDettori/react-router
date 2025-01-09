import "bootstrap/dist/css/bootstrap.min.css";
//import posts from "./data/posts.js";
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'

function App() {

  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/posts" Component={MainComponent} />
          <Route path="/us" Component={ChiSiamo} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </>
  );
}

export default App