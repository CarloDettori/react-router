import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';


//import posts from "./data/posts.js";
import DefaultLayout from "./pages/DefaultLayout";
import MainComponent from './components/MainComponent'
import PostPage from "./pages/PostPage";
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import FormPage from "./pages/FormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const tags = [
  "javascript",
  "html",
  "css",
  "python",
  "java",
  "c++",
  "php",
  "ruby",
  "sql",
  "xml",
];

import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />

            <Route path="/posts">
              <Route index Component={MainComponent} />
              <Route path=":id" Component={PostPage} />
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