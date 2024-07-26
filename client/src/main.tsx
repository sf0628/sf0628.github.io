import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ExperiencePage from './pages/ExperiencePage.tsx';
import ProjectDetailsPage from './pages/ProjectDetailsPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import ResumePage from './pages/ResumePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

import './index.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/experience',
        element: <ExperiencePage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      },
      {
        path: '/projects/:projectId',
        element: <ProjectDetailsPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
