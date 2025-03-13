import { useState } from 'react'
import "./App.css";

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#4E0E1F] border-gray-200 p-4 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center space-x-3">
          </a>

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" className="block py-2 px-3 text-white hover:underline">Inicio</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white hover:underline">Tipos de violencia</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white hover:underline">ChatBot</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white hover:underline">Sobre nosotros</a>
              </li>
            </ul>
          </div>

          <div className="flex space-x-3">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row p-8 bg-white shadow-lg m-6 rounded-lg">
        <div className="md:w-2/3">
          <img src="/fgr-logo.png" alt="FGR Logo" className="w-32 mb-4" />
          <h1 className="text-3xl font-bold text-blue-900">Chatbot de Denuncias de Violencia Política de Género</h1>
          <h2 className="text-lg font-bold mt-2 text-black">Tu voz importa. Denuncia de forma segura y anónima</h2>
          <p className="mt-4 text-gray-700">
            Nuestra misión es brindar un canal confidencial y seguro para que cualquier persona pueda denunciar situaciones
            de violencia política de género de manera anónima. Creemos en una sociedad equitativa y libre de violencia, y
            trabajamos para conectar cada denuncia con las autoridades y organizaciones correspondientes, garantizando
            justicia, protección y apoyo a quienes enfrentan obstáculos en su participación política por razones de género.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="bg-red-600 p-8 rounded-full shadow-lg">
            <img src="/megafono.png" alt="Denuncia" className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
