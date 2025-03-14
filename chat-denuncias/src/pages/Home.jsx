function Home() {
    return (
      <div className="flex flex-col md:flex-row p-8 bg-white shadow-lg m-6 rounded-lg">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-blue-900">
            Chatbot de Denuncias de Violencia Política de Género
          </h1>
          <h2 className="text-lg font-bold mt-2 text-black">
            Tu voz importa. Denuncia de forma segura y anónima
          </h2>
          <p className="mt-4 text-gray-700">
            Nuestra misión es brindar un canal confidencial y seguro para que cualquier persona pueda denunciar situaciones
            de violencia política de género de manera anónima.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="bg-red-600 p-8 rounded-full shadow-lg">
            <img src="C:/Users/User/Desktop/hackaton/chat-denuncias/src/resources/megafono.jpg" alt="Denuncia" className="w-24" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  