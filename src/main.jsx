import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import Chapter1 from './routes/Chapter1';
import CS1 from './routes/CS1';
import NotFound from './routes/NotFound'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index  element={<App />}/>
      <Route path="/CS1" element={<CS1/>}/>
      <Route path="/CS1/Chapter1" element={<Chapter1/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);