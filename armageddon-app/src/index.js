import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Asteroids } from './pages/Asteroids';
import { Destroyment } from './pages/Destroyment';
import { Asteroid } from './pages/Asteroid';
import { AsteroidsContextProvider } from './components/asteroids-context/AsteroidsContext';

const router = createBrowserRouter([
  {
    path: '/asteroids',
    element: <Asteroids />,
  },
  {
    path: '/destroyment',
    element: <Destroyment />,
  },
  {
    path: '/asteroid/:id',
    element: <Asteroid />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AsteroidsContextProvider>
      <RouterProvider router={router} />
    </AsteroidsContextProvider>
  </React.StrictMode>
);