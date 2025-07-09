import { Button } from "./ui/button"
import koalaImg from "../assets/koala.png"
import GeminiImg from "../assets/gemini.png"
import GptImg from "../assets/gpt.png"
import DeepSeekImg from "../assets/deepseek.png"

export function HeroSection() {
  return (
    <section className="px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texto principal y botón en escritorio */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center md:text-left">
                Explora el mundo del <span className="text-yellow-400">prototipado</span>
                <br />y la <span className="text-yellow-400">inteligencia artificial</span> en la
                <br />
                creación de <span className="text-yellow-400">recursos educativos</span>
                <br />
                <span className="text-yellow-400">digitales</span>
              </h2>
              {/* Botón solo visible en escritorio */}
              <div className="hidden md:flex w-full">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 px-10 rounded-full text-lg font-semibold">
                  Empieza a aprender
                </Button>
              </div>
            </div>

            {/* Imagen koala y decoraciones */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Fondo amarillo y decoraciones solo en md+ */}
              <div className="relative hidden md:flex">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={koalaImg} alt="Koala" className="object-contain w-72 h-72" />
                </div>
                {/* Imágenes decorativas */}
                <div className="absolute top-8 -left-28 w-22 h-22 rounded-full items-center justify-center hidden md:flex">
                  <div className="text-xl"><img src={GptImg} alt="chatGpt" className="object-contain w-full h-full" /></div>
                </div>
                <div className="absolute top-50 -left-35 w-25 h-25 rounded-full items-center justify-center hidden md:flex">
                  <div className="text-xl"><img src={DeepSeekImg} alt="chatGpt" className="object-contain w-full h-full" /></div>
                </div>
                <div className="absolute top-60 -right-20 w-25 h-25 rounded-full items-center justify-center hidden md:flex">
                  <div className="text-xl"><img src={GeminiImg} alt="gemini" className="object-contain w-full h-full" /></div>
                </div>
              </div>
              {/* Solo el koala en móvil */}
              <div className="flex md:hidden flex-col items-center">
                <img src={koalaImg} alt="Koala" className="object-contain w-80 h-80 mb-0" />
                {/* Botón solo visible en móvil */}
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 px-10 rounded-full text-lg font-semibold mt-8">
                  Empieza a aprender
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
