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

const AnalysisChat4: React.FC = () => {
  const messages: ChatMessage[] = [
    {
      sender: 'system' as const,
      senderName: 'Alessandra Silva',
      content: '**Contato:** Aline Santos Vendedora São Paulo - Telefones: 5519997285542',
      timestamp: '2025-03-07 08:20:07'
    },
    {
      sender: 'system' as const,
      senderName: 'Alessandra Silva',
      content: 'Perdão, o nome dela é Aline.',
      timestamp: '2025-03-07 08:19:29'
    },
    {
      sender: 'system' as const,
      senderName: 'Alessandra Silva',
      content: '**audio**',
      timestamp: '2025-03-07 08:19:10',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Alessandra Amarante VPJ Alimentos',
      content: 'Olá! Tudo bem? 😃  Sou a Alessandra, especialista em vendas no seu segmento na VPJ Alimentos. Percebi que faz um tempo que não realizamos um pedido e quero entender como posso te apoiar nesse momento.  Temos novidades e condições especiais para clientes como você! Me conta, o que falta para fecharmos um novo pedido? Posso te ajudar com algo específico? Fico à disposição para te passar as melhores opções!🔥  Aguardo seu retorno!',
      timestamp: '2025-02-25 08:32:51'
    },
    {
      sender: 'user' as const,
      senderName: 'Alessandra Silva VPJ Alimentos',
      content: 'Compreendo, qualquer dúvida estamos a disposição para achar a melhor proposta para você.',
      timestamp: '2025-02-07 15:08:18'
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: 'Boa tarde Gabriella ! Sim… mais os preços estavam um pouco acima. Semana que vem peço cotação de novo. Obrigado 🙏 e bom final de semana',
      timestamp: '2025-02-07 15:06:15'
    },
    {
      sender: 'user' as const,
      senderName: 'Alessandra Silva VPJ Alimentos',
      content: 'Olá, teve a oportunidade de ver nossa proposta? Posso ajudar com mais alguma informação? Quero ressaltar que nossas tabelas de preços que envio é temporária e pode ser atualizada diariamente.',
      timestamp: '2025-02-07 15:02:37'
    },
    {
      sender: 'user' as const,
      senderName: 'Alessandra Silva VPJ Alimentos',
      content: '**imagem**',
      timestamp: '2025-02-04 15:31:30',
      isImage: true
    },
    {
      sender: 'user' as const,
      senderName: 'Alessandra Silva VPJ Alimentos',
      content: 'Vou fazer seu orçamento e te encaminhar.',
      timestamp: '2025-02-04 15:25:11'
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: 'Ou pode ser tambem 10.619.297/0001-21',
      timestamp: '2025-02-04 14:49:57'
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: '10.619.297/0003-93',
      timestamp: '2025-02-04 14:41:38'
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: 'Sim',
      timestamp: '2025-02-04 14:41:24'
    },
    {
      sender: 'user' as const,
      senderName: 'Alessandra Silva VPJ Alimentos',
      content: 'Você teria o CNPJ antigo?',
      timestamp: '2025-02-04 14:16:25'
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: '**imagem**',
      timestamp: '2025-02-04 14:14:08',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: '**audio**',
      timestamp: '2025-02-04 14:13:48',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Alessandra Silva VPJ Alimentos',
      content: 'Poderia me falar seu CNPJ por gentileza?',
      timestamp: '2025-02-04 14:12:58'
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: 'Aqui Alejandro de Empanadas Caminito',
      timestamp: '2025-02-04 14:12:56'
    },
    {
      sender: 'user' as const,
      senderName: 'Alessandra Silva VPJ Alimentos',
      content: '**audio**',
      timestamp: '2025-02-04 14:12:43',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: 'Me pasa preço de asado de tira / bife de chorizo / bife ancho / picanha / fraldinha / file mignon',
      timestamp: '2025-02-04 13:58:17'
    },
    {
      sender: 'system' as const,
      senderName: 'Alejandro',
      content: 'Gabriella boa tarde',
      timestamp: '2025-02-04 13:58:11'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Há 20 anos, a VPJ Alimentos oferece o melhor em carnes de qualidade superior. Nossas certificações e premiações comprovam nosso compromisso com a excelência. Quer elevar o nível de seu negócio?',
      timestamp: '2024-12-04 16:54:25'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**imagem**',
      timestamp: '2024-12-04 16:54:23',
      isImage: true
    }
  ].reverse(); // Inverte a ordem para mostrar do mais antigo para o mais recente

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-900">Ex. 4: Cliente argentino - cotação sem retorno e confusão de atendentes</h2>
        <span className="text-xs text-gray-500">Dez/24 a Mar/25</span>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-2 h-[400px] overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`mb-2 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'system' ? (
              <div className="flex-shrink-0 mr-1">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {message.senderName?.split(' ')[0].substring(0, 2).toUpperCase()}
                </div>
              </div>
            ) : null}
            <div 
              className={`p-2 rounded-lg ${
                message.isFile 
                  ? 'bg-gray-200 text-gray-800' 
                  : message.isImage
                    ? 'bg-gray-200 text-gray-800'
                    : message.isAudio
                      ? 'bg-gray-200 text-gray-800'
                      : message.sender === 'user' 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
              } ${message.isReaction ? 'italic bg-transparent' : ''} max-w-[200px] md:max-w-[250px] lg:max-w-[300px]`}
            >
              {message.senderName && (
                <div className={`text-xs ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-600'} mb-1`}>
                  {message.sender === 'user' 
                    ? (message.senderName.includes('Vendedora') 
                        ? 'Vendedora' 
                        : 'Alessandra VPJ')
                    : message.senderName}
                </div>
              )}
              
              <p className={`text-xs ${
                message.isFile 
                  ? 'text-blue-600 font-medium' 
                  : message.isImage 
                    ? 'text-purple-600 font-medium'
                    : message.isAudio
                      ? 'text-green-600 font-medium'
                      : ''
              }`}>
                {message.content}
              </p>
              
              <span className={`text-xs mt-1 block text-right ${
                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp.split(' ')[1].substring(0, 5)}
              </span>
            </div>
            {message.sender === 'user' ? (
              <div className="flex-shrink-0 ml-1">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {message.senderName?.includes('Vendedora') ? 'VD' : 'AL'}
                </div>
              </div>
            ) : null}
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

export default AnalysisChat4; 