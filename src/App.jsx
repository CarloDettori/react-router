import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';


//import posts from "./data/posts.js";
import DefaultLayout from "./pages/DefaultLayout";
import MainComponent from './components/MainComponent'
import ShowPostComponent from "./components/ShownPostComponent";
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import FormPage from "./pages/FormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/posts" Component={MainComponent}>
              <Route path=":id" component={ShowPostComponent} />
            </Route>
            <Route path="/us" Component={ChiSiamo} />
            <Route path="/form" Component={FormPage} />

          </Route>
        </Routes>
      </BrowserRouter >

    </>
  );
}

export default App

// {path = "/"} === {index}