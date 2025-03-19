import React from 'react';

interface ChatMessage {
  sender: 'system' | 'user';
  senderName?: string;
  content: string;
  timestamp: string;
  isReaction?: boolean;
  isFile?: boolean;
}

const AnalysisChat: React.FC = () => {
  const messages: ChatMessage[] = [
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: '👍',
      timestamp: '2025-01-23 10:27:35',
      isReaction: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Perfeito João, fico à disposição para qualquer dúvida!',
      timestamp: '2025-01-23 10:26:58'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Excelente! Muito obrigado pela atenção e por toda a orientação. Vou fazer isso hoje mesmo.',
      timestamp: '2025-01-23 10:24:17'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Você pode acessar o portal do cliente em portal.vpjalimentos.com.br e no menu lateral selecionar "Fazer pedido". Lá você encontra todos os produtos disponíveis e pode montar seu carrinho. Qualquer dúvida estou à disposição!',
      timestamp: '2025-01-23 10:19:36'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Perfeito! E como faço para realizar o primeiro pedido? Tem algum catálogo ou site onde posso ver os produtos disponíveis?',
      timestamp: '2025-01-23 10:15:49'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Excelente! Fico feliz em saber que decidiu seguir com a VPJ Alimentos. A aprovação significa que você já pode fazer pedidos conosco. Os produtos são de primeira linha e nosso sistema de entrega é muito eficiente.',
      timestamp: '2025-01-23 10:11:27'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Oi Miguel, tudo bem? Recebi o email de aprovação do cadastro da minha empresa e gostaria de saber quais são os próximos passos.',
      timestamp: '2025-01-23 10:08:42'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Oi João Paulo! Que bom falar com você novamente. Como posso ajudar?',
      timestamp: '2025-01-23 10:05:16'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Bom dia, Miguel',
      timestamp: '2025-01-23 09:58:31'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Perfeito João, estaremos aguardando. Tenha um excelente dia!',
      timestamp: '2025-01-15 16:05:27'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Sim, vou providenciar e enviar o quanto antes. Obrigado!',
      timestamp: '2025-01-15 16:02:46'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Ótima notícia! Para darmos sequência no cadastro precisamos do CNPJ, Contrato Social e comprovante de endereço da empresa. Você consegue nos enviar esses documentos?',
      timestamp: '2025-01-15 15:57:19'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Olá Miguel, avaliei as informações que você enviou e tenho interesse em me tornar cliente da VPJ Alimentos. Como procedemos com o cadastro?',
      timestamp: '2025-01-15 15:48:36'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Fico à disposição para esclarecer qualquer dúvida adicional. Tenha uma ótima semana!',
      timestamp: '2025-01-15 11:16:48'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: '**Catálogo_VPJ_2025.pdf**',
      timestamp: '2025-01-15 11:15:57',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Além disso, temos uma política de entrega rápida, com prazo máximo de 48h após a confirmação do pedido para a sua região. Nossa equipe de logística trabalha para garantir que os produtos cheguem frescos e na temperatura adequada.',
      timestamp: '2025-01-15 11:15:23'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora VPJ',
      content: 'Oi João Paulo! A VPJ Alimentos oferece uma linha completa de produtos cárneos premium, incluindo cortes especiais de bovinos, suínos e cordeiro. Nossos diferenciais incluem produtos certificados, rastreabilidade completa e opções exclusivas como a linha Black Angus e Duroc Pork.',
      timestamp: '2025-01-15 11:13:45'
    },
    {
      sender: 'system' as const,
      senderName: 'João Paulo',
      content: 'Bom dia! Gostaria de conhecer mais sobre os produtos da VPJ Alimentos. Quais são os diferenciais da empresa?',
      timestamp: '2025-01-15 10:45:12'
    }
  ].reverse(); // Inverte a ordem para mostrar do mais antigo para o mais recente

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-900">Ex. 2: Lead qualificado em 8 dias de conversão sem follow-up</h2>
        <span className="text-xs text-gray-500">15/Jan a 23/Jan</span>
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

export default AnalysisChat; 