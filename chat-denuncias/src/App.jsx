import { useState, useEffect } from "react";
import axios from "axios";
import ReactWebChat from "botframework-webchat";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import chatSetup from './config/ChatSetup.json';

function App() {
  const [userInput, setUserInput] = useState(""); // Para guardar la entrada del usuario
  const [botMessages, setBotMessages] = useState([]); // Para guardar los mensajes del bot
  const [directLine, setDirectLine] = useState(null); // Para guardar la conexión con Direct Line

  // Usamos useEffect para obtener la respuesta del bot
  useEffect(() => {
    const fetchChatBot = async () => {
      try {
        const response = await axios.post(
          "https://chatbot2606240329.openai.azure.com/api/chat",
          {
            prompt: chatSetup.systemPrompt,
            model: chatSetup.chatParameters.deploymentName,
            max_tokens: chatSetup.chatParameters.maxResponseLength,
            temperature: chatSetup.chatParameters.temperature,
            top_p: chatSetup.chatParameters.topProbablities,
            stop: chatSetup.chatParameters.stopSequences
          },
          {
            headers: {
              "Authorization": `Cso2z9585jHy0tevxiqkduP254lnSBNOos5t8BRS0hVq8Eb2h08tJQQJ99BCAC4f1cMXJ3w3AAAAACOGrEef`,
              "Content-Type": "application/json"
            }
          }
        );
        console.log("Response from bot:", response.data);
        // Aquí puedes gestionar el estado de tu bot
        setDirectLine(response.data);
        setBotMessages(["Hola, ¿en qué puedo ayudarte?"]); // Mensaje inicial
      } catch (error) {
        console.error("Error al conectar con Azure OpenAI:", error);
      }
    };

    fetchChatBot();
  }, []);

  // Función para manejar el "Enter" para enviar mensaje
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && userInput.trim() !== "") {
      handleSendMessage();
    }
  };

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    setBotMessages((prevMessages) => [...prevMessages, userInput]);
    setUserInput(""); // Limpiar el input después de enviar el mensaje

    // Aquí puedes simular la respuesta del bot
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        "Gracias por tu mensaje. Estoy procesando la información..."
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      
      <nav className="bg-[#4E0E1F] p-4 text-white flex justify-center items-center">
        <div className="flex space-x-8 text-lg font-medium text-white">
          <a href="#" className=" not-hover:text-white">Inicio</a>
          <a href="#" className="hover:underline">Tipos de violencia</a>
          <a href="#" className="hover:underline">ChatBot</a>
          <a href="#" className="hover:underline">Sobre nosotros</a>
        </div>
        <div className="flex space-x-3 text-xl">
          <FaFacebookF className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col p-8 bg-neutral-100 shadow-lg m-6 rounded-lg">
        {/* Sección principal */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/4 text-center md:text-left">
            <img src="/public/fiscalia2.png" alt="FGR Logo" className="w-70 mb-4 mx-auto md:mx-0" />
            <h1 className="text-3xl font-bold text-black">
              Chatbot de Denuncias de Violencia Política de Género
            </h1>
            <h2 className="text-lg font-bold mt-2 text-black">
              Tu voz importa. Denuncia de forma segura y anónima
            </h2>
            <p className="mt-4 text-gray-700">
              Nuestra misión es brindar un canal confidencial y seguro para que
              cualquier persona pueda denunciar situaciones de violencia
              política de género de manera anónima. Creemos en una sociedad
              equitativa y libre de violencia, y trabajamos para conectar cada
              denuncia con las autoridades y organizaciones correspondientes,
              garantizando justicia, protección y apoyo a quienes enfrentan
              obstáculos en su participación política por razones de género.
            </p>
          </div>
          <div className="md:w-2/4 flex justify-center items-center mt-6 md:mt-0">
            <div className="">
              <img src="/public/megafono.png" alt="Denuncia" className="w-90" />
            </div>
          </div>
        </div>
        {/* Tipos de violencia de género */}
        <div className='mt-8 text-black'>
          <h2 className='text-2xl font-bol mb-4'>Tipos de violencia de género</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Violencia física */}
            <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
              <img src='/public/fisica.png' className='w-12 h-12 mb-4' />
              <h3 className='font-semibold mb-2'>Violencia física</h3>
              <p className='text-sm text-gray-600 text-center'>
                Agresiones físicas, golpes o cualquier acto que atente contra la integridad corporal de una mujer en el ejercicio de sus funciones políticas.
              </p>
            </div>
            {/* Violencia psicológica o emocional */}
            <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
              <img src='/public/emocional.png' className='w-12 h-12 mb-4' />
              <h3 className='font-semibold mb-2'>Violencia psicológica o emocional</h3>
              <p className='text-sm text-gray-600 text-center'>
                Amenazas, intimidaciones, humillaciones o descalificaciones dirigidas a mujeres en el ámbito político para desmotivarlas o limitar su participación.
              </p>
            </div>
            {/* Violencia digital */}
            <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
              <img src='/public/digital.png' className='w-12 h-12 mb-4' />
              <h3 className='font-semibold mb-2'>Violencia digital</h3>
              <p className='text-sm text-gray-600 text-center'>
                Difusión de mensajes de odio, desinformación, acoso en redes sociales o ataques cibernéticos dirigidos a mujeres por su participación política.
              </p>
            </div>
            {/* Violencia económica o patrimonial */}
            <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
              <img src='/public/economica.png' className='w-12 h-12 mb-4' />
              <h3 className='font-semibold mb-2'>Violencia económica o patrimonial</h3>
              <p className='text-sm text-gray-600 text-center'>
                Obstaculización del acceso a recursos, negación de financiamiento, reducción de salario o cualquier acción que afecte la autonomía económica de las mujeres en la política.
              </p>
            </div>
            {/* Violencia sexual */}
            <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
              <img src='/public/sexual.png' className='w-12 h-12 mb-4' />
              <h3 className='font-semibold mb-2'>Violencia sexual</h3>
              <p className='text-sm text-gray-600 text-center'>
                Acoso, abuso o cualquier forma de coerción sexual dentro del espacio político para someter, intimidar o discriminar a una mujer.
              </p>
            </div>
            {/* Violencia institucional */}
            <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
              <img src='/public/intitucional.png' className='w-12 h-12 mb-4' />
              <h3 className='font-semibold mb-2'>Violencia institucional</h3>
              <p className='text-sm text-gray-600 text-center'>
                Acciones u omisiones de instituciones que impiden, limitan o restringen los derechos políticos de las mujeres, como negarles candidaturas o excluirlas de procesos políticos.
              </p>
            </div>
          </div>
        </div>

        {/* Chat de ejemplo */}
        <div className="mt-8 flex justify-center">
          <div className="border rounded-2xl w-80 p-4 bg-gray-800 text-white">
            {/* Mensajes del chat */}
            <div className="bg-gray-700 p-2 rounded-lg mb-2">
              {botMessages.length > 0 ? (
                botMessages.map((message, index) => (
                  <div key={index} className="mb-2 text-gray-200">{message}</div>
                ))
              ) : (
                <div className="text-gray-200">Hola, ¿en qué puedo ayudarte?</div>
              )}
            </div>

            {/* Input para escribir el mensaje */}
            <div className="mt-4 flex items-center">
              <input
                type="text"
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="Escribe tu mensaje..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
                onClick={handleSendMessage}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>


        {/* Denuncias */}
        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>Denuncias</h2>
          <ul className='list-disc list-inside'>
            <li>Denuncia 1</li>
            <li>Denuncia 2</li>
            <li>Denuncia 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;