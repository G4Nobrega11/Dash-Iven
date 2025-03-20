import React from 'react';

interface ChatMessage {
  sender: 'system' | 'user';
  senderName?: string;
  content: string;
  timestamp: string;
  isReaction?: boolean;
  isFile?: boolean;
  isImage?: boolean;
  isAudio?: boolean;
}

const AnalysisChat2: React.FC = () => {
  const messages: ChatMessage[] = [
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Ok, entendido. Obrigado pela atenção!',
      timestamp: '2025-02-19 17:35:27'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'O melhor dia para a entrega seria na quarta-feira, pois nosso roteiro de entregas para a sua região é neste dia. Conseguimos atender todo o estado de SP em até 48h após a confirmação do pedido.',
      timestamp: '2025-02-19 17:34:15'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Qual seria o prazo de entrega? Precisamos com certa urgência para um evento que teremos.',
      timestamp: '2025-02-19 17:30:42'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Temos sim! Nosso ponto de venda mais próximo fica na capital, mas realizamos entregas em toda a região. Posso te enviar nosso catálogo atualizado por e-mail também, se preferir.',
      timestamp: '2025-02-19 17:28:53'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Vocês têm algum ponto de venda na região de Campinas?',
      timestamp: '2025-02-19 17:25:11'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Trabalhos com carnes de alta qualidade para hamburguerias e temos diversas opções prontas, como nosso blend premium (180g), black angus (200g) e nosso exclusivo blend de costela que foi premiado como melhor hambúrguer artesanal do Brasil em 2024.',
      timestamp: '2025-02-19 17:22:36'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Olá João Paulo! Que bom que entrou em contato conosco. A VPJ Alimentos é uma empresa especializada no fornecimento de proteínas de alta qualidade para restaurantes e hamburguerias.',
      timestamp: '2025-02-19 17:21:45'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Boa tarde! Estou abrindo uma hamburgueria em Campinas e gostaria de informações sobre o fornecimento de carnes para hambúrgueres. Vocês trabalham com blends prontos ou apenas com cortes?',
      timestamp: '2025-02-19 17:15:32'
    }
  ].reverse(); // Inverte a ordem para mostrar do mais antigo para o mais recente

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-900">Ex. 3: Cliente hamburgueria - solicitação sem retorno</h2>
        <span className="text-xs text-gray-500">19/Fev</span>
      </div>
      <div className="bg-gray-100 rounded-lg p-2 h-[400px] overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`mb-2 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'system' && (
              <div className="flex-shrink-0 mr-1">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  JP
                </div>
              </div>
            )}
            <div 
              className={`p-2 rounded-lg ${
                message.isFile 
                  ? 'bg-gray-200 text-gray-800' 
                  : message.sender === 'user' 
                    ? 'bg-blue-500 text-white rounded-br-none' 
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
              } ${message.isReaction ? 'italic bg-transparent' : ''} max-w-[200px] md:max-w-[250px] lg:max-w-[300px]`}
            >
              {message.senderName && (
                <div className={`text-xs ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-600'} mb-1`}>
                  {message.senderName}
                </div>
              )}
              
              <p className={`text-xs ${message.isFile ? 'text-blue-600 font-medium' : ''}`}>
                {message.content}
              </p>
              
              <span className={`text-xs mt-1 block text-right ${
                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp.split(' ')[1].substring(0, 5)}
              </span>
            </div>
            {message.sender === 'user' && (
              <div className="flex-shrink-0 ml-1">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  VD
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input 
          type="text" 
          className="flex-1 p-1 text-xs border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Digite uma mensagem..."
          disabled
        />
        <button 
          className="bg-blue-500 text-white px-2 py-1 text-xs rounded-r-lg hover:bg-blue-600 transition"
          disabled
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default AnalysisChat2; 