import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import App from './App.tsx'
import CurrencyList from './components/CurrencyList'
import APIProvidersConfig from './components/APIProvidersConfig'
import GuidePage from './GuidePage'
import './index.css'

const router = createMemoryRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cur-list",
        element: <CurrencyList />,
        index: true
      },
      {
        path: "/api-prvd-conf",
        element: <APIProvidersConfig />,
      },
      {
        path: "/other",
        element: <GuidePage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// import ReactDOM from 'react-dom/client'
// import React from 'react'
// import CurrencyList from './components/CurrencyList'
// import APIProvidersConfig from './components/APIProvidersConfig'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <CurrencyList />
//     <APIProvidersConfig />
//   </React.StrictMode>,
// )
