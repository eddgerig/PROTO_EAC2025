import LessonCard from "./ui/card"

const lessons = [
  {
    id: 0,
    title: "Introducción",
    image: "/public/intro.png"
  },
  {
    id: 1,
    title: "Fundamentos del Prototipado Digital",
    image: "/public/prototipo.png"
  },
  {
    id: 2,
    title: "Fundamentos de la IA",
    image: "/public/ia.png"
  },
  {
    id: 3,
    title: "Recursos Digitales Educativos",
    image: "/public/pandared.png"
  },
  {
    id: 4,
    title: "Herramientas de IA para la creación de RED",
    image: "/public/herramientas.png"
  },
  {
    id: 5,
    title: "Prototipado Rápido con IA",
    image: "/public/protoia.png"
  },
  {
    id: 6,
    title: "Accesibilidad Digital",
    image: "/public/tortuga.png"
  },
  {
    id: 7,
    title: "Taller: Creación de RED con IA",
    image: "/public/taller.png"
  },
]

export function FeaturedLessons() {
  return (
    <section className="px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Lecciones destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center px-2">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="flex justify-center">
              <LessonCard
                title={lesson.title}
                description=""
                image={lesson.image}
                button1Text="Compartir"
                button2Text="Ver más"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
