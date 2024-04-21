import AmigoSonic from "../assets/AmgSonic.jpg"
import Ator1 from "../assets/Amigo2.jpg"
import AmgSonic from "../assets/AmigaSonic.jpg"
import Atriz1 from "../assets/TikaSupter.jpg"
import VilaoSonic from "../assets/Vilao.jpg"
import Ator2 from "../assets/Eggman2.jpg"
import Dublagem from "../assets/Dublador.jpg"
import Sonic from "../assets/Sonic6new.jpg"

function Elenco() {
    return (
      <div className="flex flex-col intem-center">

         <div className="flex justify-center mt-6 font-bold text-4xl text-blue-600 items-center mb-8">

        
         <h4>Elenco</h4>
        
         </div>

  
         <section className="flex flex-wrap justify-center gap-6">
            <div className="text-center flex flex-col">
                <h3 className="font-bold mb-2">James Marsden</h3>
                <p className="font-semibold">Ele interpreta o papel de Tom Wachowski, um policial local em uma pequena cidade que se torna amigo de Sonic e o ajuda em sua jornada.</p>
                <img src={AmigoSonic} alt="Amigo do Sonic" className="w-48" />
                <img src={Ator1} alt="Ator em Ação" className="w-48 mt-4" />
            </div>

            <div className="text-center flex flex-col">
                <h3 className="font-bold mb-2">Ben Schwartz</h3>
                <p className="font-semibold">Ele empresta sua voz ao personagem Sonic, o ouriço azul super rápido e protagonista do filme. Sonic é enérgico, brincalhão e está sempre em busca de aventuras.</p>
                <img src={Dublagem} alt="Dublador que faz o Sonic" className="w-48" />
                <img src={Sonic} alt="Dublador em cena" className="w-48 mt-4" />
            </div>

            <div className="text-center flex flex-col ">
                <h3 className="font-bold mb-5 ">Jim Carrey</h3>
                
                <p className="font-semibold">No filme, o Dr. Robotnik é um cientista louco determinado a capturar Sonic e usar seus poderes para seus próprios propósitos malignos. Jim Carrey traz sua própria marca única de humor e excentricidade ao papel, tornando o Dr. Robotnik um vilão memorável e divertido.</p>
                </div>

                <div className="flex justify-between space-x-8 mt-7 ">
                <img src={VilaoSonic} alt="Ator que faz, Vilão do Sonic" className="w-48 rounded-4xl" />
                <img src={Ator2} alt="Ator em Ação" className="h-none w-48 rounded-4xl" />
            </div>

            <div className="text-center flex flex-col">
                <h3 className="font-bold mb-2">Tika Sumpter</h3>
                <p className="font-semibold">Maddie é uma personagem compreensiva e solidária que se envolve nas aventuras de Sonic ao lado de seu marido, Tom Wachowski. Tika Sumpter traz carisma e profundidade ao papel de Maddie.</p>
                <img src={AmgSonic} alt="Atriz que faz, Mulher do Amigo do Sonic" className="w-48" />
                <img src={Atriz1} alt="Atriz em Ação" className="w-48 mt-4" />
            </div>
            </section>

            </div>
    );
  }
  
  export default Elenco;