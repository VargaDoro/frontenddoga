import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './App.css'
import Kezdolap from './pages/Kezdolap';
import Layout from './pages/Layout';
import SzoProvider from "./contexts/SzavakContexts";
import SzavakComponent from './components/SzavakComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     
    children: [
      {
        index: true,
        element: <Navigate to="/kezdolap" replace />,
      },
      {
        path: "kezdolap",
        element: <SzavakComponent />,
      },
    ],
  },
]);


function App() {
  return (
      <SzoProvider>
        <RouterProvider router={router} />
      </SzoProvider>
  );
}

export default App;