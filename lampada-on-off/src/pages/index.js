import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [estadoInterruptor, setEstadoInterruptor] = useState(false)
  const [contador, setContador] = useState(0)

  function mudarLampada(){
    setEstadoInterruptor(!estadoInterruptor)
    if (estadoInterruptor == false)
      setContador(contador+1)
  }

  return (
  <div>
    <h2>
      {
        contador < 3
          ? `Você já ligou ${contador} vez${contador==1?"" :"es"} a lâmpada`
          : "Sua lâmpada queimou"
      }
    </h2>

    {
      contador >= 3
        ? <Image src={"/assets/boom.jpg"} width={286} height={388} /> 
        : estadoInterruptor == true 
          ? <Image src={"/assets/on.png"} width={286} height={388} /> 
          : <Image src={"/assets/off.png"} width={286} height={388} />
    }
    <button onClick={mudarLampada}>Interruptor</button>
  </div>
  );
}
