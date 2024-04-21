import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Introducao from "./components/Introducao";
import Elenco from "./components/Elenco";

function App() {
  return (
    <div>
      <Header/>
      <Introducao/>
      <Sobre/>
      <Elenco/>
      
    </div>
  )
}

export default App