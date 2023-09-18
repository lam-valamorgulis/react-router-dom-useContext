import React, { useState, lazy, Suspense } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loading from './components/Loading';

// To defer loading this component’s code until it’s rendered for the first time, replace this import with: loading when component needed
const Homepage = lazy(() => delayForDemo(import('./pages/Homepage')));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <BrowserRouter>
      {/* when children component is loading (code spliting) it fallback to Suspense component to show Loading */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;

// waiting 2s to dynamic import component
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
