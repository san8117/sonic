import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sobre from "./pages/Sobre";
import Introducao from "./pages/Introducao";
import Elenco from "./pages/Elenco";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Introducao />
  },

  {
    path: "/elenco",
    element: <Elenco />
  },

  {
    path: "/sobre",
    element: <Sobre />
  },


])

function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App