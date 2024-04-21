import Sonic1 from "../assets/Sonic1.jpg"
import Sonic5 from "../assets/Sonic5new.jpg"

function Sobre() {
  return (
    <div className="flex items-center flex-col  my-16">
        <div>
            <h2 className="font-bold text-4xl mb-7 text-blue-700">SOBRE</h2>
        </div>

        <div className=" w-64 mb-9 rounded-3xl">
        <img src={Sonic1} alt="Imagem sobre o Sonic" />


        </div>

        <div className="mt-14 mb-9 font-bold text-sky-700 text-4xl">
        <h3>Sinopse</h3>
      </div>

      <div className="flex items-center ">
  <img className="w-64 ml-3 rounded-3xl" src={Sonic5} alt="Imagem do Sonic" />

     <div className=" ml-4 mr-4">
        
      <p className="text-justify font-semibold">
      Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.
      </p>
      <a href="https://www.adorocinema.com/filmes/filme-229574/" className="block mt-2 font-semibold text-blue-600">Saiba Mais</a>
       </div>
      </div>


     </div>

       
   
  )
}

export default Sobre