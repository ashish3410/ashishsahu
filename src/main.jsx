import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Todo from './pages/Todo.jsx'
import CurrencyConverter from './pages/CurrencyConvertor.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import TicTacToe from './pages/TicTacToe.jsx'
import MegaBlog from './pages/Blog.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: (
                <About/>
            ),
        },
        {
            path: "/projects",
            element: (
                <Projects/>
            ),
        },
        {
            path: "/contact",
            element: (
              <ContactMe/>
            ),
        },
        {
            path: "/project-1",
            element: (
              <Todo/>
            ),
        },
        {
            path: "/project-2",
            element: (
              <CurrencyConverter/>
            ),
        },
        {
            path: "/project-3",
            element: (
              <TicTacToe/>
            ),
        },
        {
            path: "/project-4",
            element: (
              <MegaBlog/>
            ),
        },
    ],
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
