import "bootstrap/dist/css/bootstrap.min.css";
//import posts from "./data/posts.js";
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'


import './App.css'

function App() {

  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />

    </>
  )
}

export default App