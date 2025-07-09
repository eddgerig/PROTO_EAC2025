import { Cpu, Linkedin, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
   <footer className="bg-[#0D141C] text-white px-4 py-8">
   <div className="max-w-7xl mx-auto">
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
       {/* Logo */}
       <div className="flex items-center space-x-2">
         <Cpu className="h-8 w-8" />
         <span className="text-xl font-bold">PROTO</span>
       </div>

       {/* Social Links */}
       <div className="flex items-center space-x-6">
         <a href="#" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
           <Linkedin className="h-5 w-5" />
           <span>LinkedIn</span>
         </a>
         <a href="#" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
           <Instagram className="h-5 w-5" />
           <span>Instagram</span>
         </a>
         <a href="#" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
           <MessageCircle className="h-5 w-5" />
           <span>Threads</span>
         </a>
       </div>

       {/* Contact Info */}
       <div className="text-right text-sm text-gray-300 font-semibold">
         <p>Ciudad Universitaria de Caracas.</p>
         <p>Los Chaguaramos. Caracas, Venezuela.</p>
         <p>Facultad de Ciencias.</p>
         <p className="mt-2">proto@ucv.ve</p>
       </div>
     </div>
   </div>
 </footer>
  )
}
