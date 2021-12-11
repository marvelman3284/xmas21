import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Gift } from './App';
import { Undef } from './Others';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Gift />} />
      <Route exact path="/404" element={<Undef />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);