import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Gift } from './App';
import { Undef, Header, Footer } from './Others';


ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Gift />} />
      <Route exact path="/" element={<Header />} />
      <Route exact path="/" element={<Footer />} />
      <Route exact path="/404" element={<Undef />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);