import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Housing from "./pages/Housing";

//Routes pour les différentes pages//
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />}>
          <Route path="home" element={<Home />} />
          <Route path ="housing" element= {<Housing />}/>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  
