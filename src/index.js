import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
  </React.StrictMode>
);

