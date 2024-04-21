import Capa from "../assets/Sonic2.jpg"

function Introducao() {
    return (
      <div className=" flex flex-col items-center my-12">
          <img src={Capa} alt="Capa do filme Sonic" className="w-80" />
          

          <div className=" ml-2 mr-2 my-7 font-semibold ">
          <p>Este é um trabalho escolar sobre o filme Sonic, realizado por Guilherme Oliveira, com a apresentação construída usando React.js. "Sonic the Hedgehog" é uma aventura emocionante baseada no icônico jogo de vídeo game da Sega. Com uma frase icônica do filme: "Tenho que ir rápido!", Sonic cativa fãs de todas as idades com sua velocidade e humor. Espero que gostem da apresentação!</p>
          </div>
      </div>
    );
  }
  
  export default Introducao;