import { useParams, useNavigate } from 'react-router-dom'
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"

const lessons = [
  {
    id: 0,
    title: "Introducción",
    image: "/public/intro.png",
    description: "Bienvenido al curso de prototipado digital e inteligencia artificial. En esta lección introductoria, exploraremos los conceptos fundamentales que te permitirán crear recursos educativos digitales innovadores.",
    content: "En esta lección aprenderás sobre los fundamentos del prototipado digital y cómo la inteligencia artificial puede revolucionar la creación de recursos educativos. Exploraremos casos de uso prácticos y herramientas que facilitarán tu trabajo como educador."
  },
  {
    id: 1,
    title: "Fundamentos del Prototipado Digital",
    image: "/public/prototipo.png",
    description: "Aprende los principios básicos del prototipado digital y cómo aplicar metodologías ágiles en el desarrollo de recursos educativos.",
    content: "El prototipado digital es una metodología que permite crear versiones rápidas de recursos educativos para validar ideas antes de invertir tiempo en el desarrollo completo. En esta lección exploraremos técnicas como el wireframing, mockups y prototipos interactivos."
  },
  {
    id: 2,
    title: "Fundamentos de la IA",
    image: "/public/ia.png",
    description: "Explora los conceptos básicos de la inteligencia artificial y su aplicación en el contexto educativo.",
    content: "La inteligencia artificial está transformando la educación de maneras fundamentales. En esta lección cubriremos los conceptos básicos de machine learning, procesamiento de lenguaje natural y cómo estas tecnologías pueden mejorar la experiencia de aprendizaje."
  },
  {
    id: 3,
    title: "Recursos Digitales Educativos",
    image: "/public/pandared.png",
    description: "Descubre cómo crear recursos educativos digitales efectivos y accesibles para diferentes tipos de aprendices.",
    content: "Los recursos educativos digitales (RED) son herramientas poderosas para el aprendizaje moderno. Aprenderemos sobre diseño instruccional, accesibilidad digital y mejores prácticas para crear contenido educativo atractivo y efectivo."
  },
  {
    id: 4,
    title: "Herramientas de IA para la creación de RED",
    image: "/public/herramientas.png",
    description: "Conoce las herramientas de IA más útiles para crear recursos educativos digitales de alta calidad.",
    content: "Existen numerosas herramientas de IA que pueden acelerar y mejorar la creación de recursos educativos. Exploraremos herramientas para generación de contenido, análisis de texto, creación de imágenes y más."
  },
  {
    id: 5,
    title: "Prototipado Rápido con IA",
    image: "/public/protoia.png",
    description: "Aprende técnicas para prototipar rápidamente usando herramientas de inteligencia artificial.",
    content: "La combinación de prototipado rápido con IA puede revolucionar tu flujo de trabajo. En esta lección práctica, aprenderás a usar herramientas de IA para crear prototipos funcionales en minutos en lugar de horas."
  },
  {
    id: 6,
    title: "Accesibilidad Digital",
    image: "/public/tortuga.png",
    description: "Aprende a crear recursos educativos digitales accesibles para todos los estudiantes.",
    content: "La accesibilidad digital es fundamental para una educación inclusiva. Exploraremos las pautas de accesibilidad web (WCAG), técnicas para crear contenido accesible y herramientas para evaluar la accesibilidad de tus recursos."
  },
  {
    id: 7,
    title: "Taller: Creación de RED con IA",
    image: "/public/taller.png",
    description: "Aplica todo lo aprendido en un taller práctico donde crearás recursos educativos digitales usando IA.",
    content: "En este taller práctico, aplicarás todos los conocimientos adquiridos para crear recursos educativos digitales completos. Trabajarás en un proyecto real desde la concepción hasta la implementación final."
  },
]

export default function LessonDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = lessons.find(l => l.id === Number(id))

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Lección no encontrada</h1>
            <Button onClick={() => navigate('/')} className="bg-green-500 hover:bg-green-600">
              Volver al inicio
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Botón de regreso */}
          <Button 
            onClick={() => navigate('/')}
            className="mb-6 bg-slate-700 hover:bg-slate-600 text-white flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Button>

          {/* Contenido de la lección */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Imagen de la lección */}
            <div className="w-full h-64 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
              <img src={lesson.image} alt={lesson.title} className="h-48 w-48 object-contain" />
            </div>

            {/* Información de la lección */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-4">{lesson.title}</h1>
              <p className="text-lg text-slate-600 mb-6">{lesson.description}</p>
              
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Contenido de la lección</h2>
                <p className="text-slate-700 leading-relaxed">{lesson.content}</p>
              </div>

              {/* Botones de acción */}
              <div className="mt-8 flex gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Comenzar lección
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Descargar recursos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 