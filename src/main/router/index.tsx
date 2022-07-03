import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'presentation/pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="character/:id" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}
