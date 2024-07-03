import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Main/Main';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import ContactMe from './Components/ContactMe/ContactMe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <About></About>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/education",
        element: <Education></Education>
      },
      {
        path: "/contact-me",
        element: <ContactMe></ContactMe>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
