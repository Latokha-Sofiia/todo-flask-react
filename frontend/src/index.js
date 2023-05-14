import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Template from './componets/Template/Template';
import './fonts/PlusJakartaSans-Medium.ttf'
import './fonts/PlusJakartaSans-SemiBold.ttf'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoPage from './pages/TodosPage/TodoPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: '',
        element: <TodoPage />
      },
      {
        path: 'todos',
        element: <TodoPage/>
      },
      {
        path: 'calendar',
        element: <CalendarPage/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
