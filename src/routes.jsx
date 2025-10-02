import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import App from './App';

const routes = createBrowserRouter([
 {
  path: '/',
  element: <App />,
  children: [
     {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/jobs',
    element: <JobsPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  ]
 }
]);

export default routes;