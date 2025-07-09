import { Button } from "./ui/button"
import { Cpu, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#0D141C] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Cpu className="h-8 w-8" />
          <span className="text-xl font-bold">PROTO</span>
        </div>

        <div className="flex items-center gap-10">
          {/* Menú de navegación normal (oculto en móvil) */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Inicio
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Aprende
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Nosotros
            </a>
            <a href="#" className="text-yellow-300 hover:text-green-500 transition-colors text-sm font-semibold ">Iniciar sesión</a>
          </nav>

          {/* Botón de registro (oculto en móvil) */}
          <div className="hidden md:block">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">Regístrate</Button>
          </div>

          {/* Icono menú hamburguesa (visible solo en móvil) */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Menú móvil (desplegable) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="w-64 bg-[#0D141C] h-full shadow-lg p-6 flex flex-col">
            <button
              className="self-end mb-8 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="h-7 w-7" />
            </button>
            <nav className="flex flex-col gap-6 font-semibold">
              <a href="#" className="hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Aprende
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Nosotros
              </a>
              <a href="#" className="text-yellow-300 hover:text-green-500 transition-colors text-sm font-semibold" onClick={() => setMobileMenuOpen(false)}>
                Iniciar sesión
              </a>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full mt-4">Regístrate</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
