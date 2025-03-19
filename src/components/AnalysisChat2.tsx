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
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Amanhã o Daniel entra em contato contigo',
      timestamp: '2025-02-20 16:31:01'
    },
    {
      sender: 'system' as const,
      senderName: 'Kelviene Santos',
      content: 'Beleza. Tenho interesse em 9 hambúrgueres ao todo, e o que eu realmente queria saber é se vocês têm promoção de frete grátis a partir de algum valor mínimo de compra. Estou querendo fazer uma compra maior para aproveitar e não pagar frete.',
      timestamp: '2025-02-20 16:04:48'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'A principio não temos essa política, mas devido a quantidade podemos isentar o valor do frete, porém eu precisaria alinhar com meu gestor que retorna amanhã para saber se tem possibilidade',
      timestamp: '2025-02-20 16:04:32'
    },
    {
      sender: 'system' as const,
      senderName: 'Kelviene Santos',
      content: 'Ah, entendi! Obrigada pela explicação. Você pode me dizer se vocês têm alguma política de frete grátis? Tipo, a partir de X reais em compras?',
      timestamp: '2025-02-20 15:32:13'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: '**áudio**',
      timestamp: '2025-02-20 15:32:13',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Kelviene Santos',
      content: 'Entendi que tem um de carne suína premium, um blend e outro angus, né? O que muda entre eles exatamente? É só o tipo de carne?',
      timestamp: '2025-02-20 15:30:48'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: '**áudio**',
      timestamp: '2025-02-20 15:30:47',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Kelviene Santos',
      content: 'Eita, tá bom. Isso porque eu quero saber a diferença para escolher. Vi que tem vários tipos de hambúrguer artesanal no site, mas não consigo entender bem a diferença entre eles.',
      timestamp: '2025-02-20 15:28:44'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: '**áudio**',
      timestamp: '2025-02-20 15:28:43',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Kelviene Santos',
      content: 'Quais são as opções de hambúrguer artesanal que vocês têm? Quero entender melhor as diferenças.',
      timestamp: '2025-02-20 15:20:31'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: '**áudio**',
      timestamp: '2025-02-20 15:20:30',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Kelviene Santos',
      content: 'Oi, boa tarde! Estou querendo comprar hambúrguer artesanal para minha hamburgueria. Vocês têm esse produto?',
      timestamp: '2025-02-20 15:15:34'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Olá Kelviene, tudo bem? Iremos te ajudar com todas as dúvidas sobre os hambúrgueres artesanais.',
      timestamp: '2025-02-20 15:10:06'
    }
  ].reverse(); // Inverte a ordem para mostrar do mais antigo para o mais recente

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-900">Ex. 2: Cliente hamburgueria - negociação técnica com 16 trocas de áudio</h2>
        <span className="text-xs text-gray-500">20/Fev</span>
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
                  {message.senderName?.split(' ').map(name => name[0]).join('').substring(0, 2).toUpperCase()}
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
                  {message.senderName}
                </div>
              )}
              
              <p className={`text-xs ${
                message.isFile 
                  ? 'text-blue-600 font-medium' 
                  : message.isImage 
                    ? 'text-purple-600 font-medium'
                    : message.isAudio
                      ? 'text-orange-600 font-medium'
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
                  VD
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

export default AnalysisChat2; 