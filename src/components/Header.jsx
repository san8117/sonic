import Icone from "../assets/IconedoSonic.jpg"

function Header() {
    return (
      <div className='flex justify-between items-center bg-blue-600 px-6 py-4 font-bold h-20'>
        <div className="flex items-center space-x-2">
          <img className="w-14" src={Icone} alt="Ícone do Sonic" /> 
          <h1 className="text-stone-50  text-3xl font-extrabold	">SONIC</h1>
        </div>


        <div className="flex items-center space-x-4 text-stone-50 text-xl">
          <a href="/Introdução">Introdução</a>
          <a href="/Sobre">Sobre</a>
          <a href="/Elenco">Elenco</a>
        </div>
      </div>
    );
  }
  
  export default Header;