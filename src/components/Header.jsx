import Icone from "../assets/IconedoSonic.jpg"
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className='flex justify-between items-center bg-blue-600 w-full px-3 py-3 font-bold '>

        
        <div className="flex items-center space-x-2">
          <img className="w-14" src={Icone} alt="Ícone do Sonic" /> 
          <h1 className="text-stone-50  text-3xl font-extrabold	">SONIC</h1>
        </div>
        

        <div className="flex items-center space-x-4 text-stone-50 text-xl">

        <nav className="">
          <ul className="flex items-center mr-5">
            <li>
              <Link to = "/" className="">Home</Link> 
            </li>

            <li>
              <Link to = "/Elenco">Elenco</Link> 
            </li>

            <li>
              <Link to = "/Sobre">Sobre</Link> 
            </li>

           
          </ul>
        </nav>
          
        </div>
      </div>
    );
  }
  
  export default Header;