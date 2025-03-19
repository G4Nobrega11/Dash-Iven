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

const AnalysisChat5: React.FC = () => {
  const messages: ChatMessage[] = [
    {
      sender: 'user' as const,
      senderName: 'Vendedora Mesa',
      content: 'bom dia!',
      timestamp: '2025-03-07 10:49:19'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Bom dia Nicole',
      timestamp: '2025-03-07 10:12:17'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Mesa',
      content: 'bom dia, tudo bem? me chamo Nicole, falo aqui da VPJ Alimentos e a partir de agora darei continuidade ao seu atendimento!  deixa meu contato salvo, fico a disposição!',
      timestamp: '2025-03-07 10:05:09'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'A equipe VPJ Alimentos agradece o seu contato. Caso tenha alguma dúvida, estamos à disposição para ajudar.',
      timestamp: '2025-03-06 17:46:05'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Obrigado',
      timestamp: '2025-03-06 17:37:25'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**Contato:** Vendedora da Mesa - Telefones: 5519971428039',
      timestamp: '2025-03-06 17:15:48'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Oi Regis, tudo bem com você?   Gostaria de informar que, a partir de hoje, a Vendedora da Mesa será a sua vendedora oficial, pois minha responsabilidade é somente no atendimento aos primeiros pedidos dos nossos clientes.  Estarei encaminhando o contato dela, e qualquer dúvida ou necessidade poderá ser tratada diretamente com ela.  Agradeço pela parceria e estou à disposição para o que precisar! 🥰',
      timestamp: '2025-03-06 17:15:40'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'A equipe VPJ Alimentos agradece o seu contato. Caso tenha alguma dúvida, estamos à disposição para ajudar.',
      timestamp: '2025-02-18 10:57:15'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Ok',
      timestamp: '2025-02-18 09:56:35'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Assim que liberar a NF eu te encaminho junto com o contato do nosso financeiro para ser visto sobre o pagamento.',
      timestamp: '2025-02-18 09:41:09'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Bom dia Regis, tudo bem com você? Subi seu pedido em tela. As entregas para Indaiatuba são todas as terças-feiras, então ficou para o dia 25/02.',
      timestamp: '2025-02-18 09:40:34'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**imagem**',
      timestamp: '2025-02-18 09:36:57',
      isImage: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Imagina',
      timestamp: '2025-02-17 17:32:37'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Obrigado',
      timestamp: '2025-02-17 17:18:28'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**78.pdf**',
      timestamp: '2025-02-17 16:57:45',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**imagem**',
      timestamp: '2025-02-17 16:57:23',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Quanto está o seu tomahalk?',
      timestamp: '2025-02-17 16:52:29'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Ok obrigada',
      timestamp: '2025-02-17 15:58:25'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'A minha esposa preencheu o que estava faltando',
      timestamp: '2025-02-17 15:02:38'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'https://share.jestor.fun/grupovpj/4577ec7116c9c9d454022c6301de7ef2?updateRecord=46.022.187/0001-25',
      timestamp: '2025-02-17 15:02:21'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Ok! Vou subir para cadastro',
      timestamp: '2025-02-17 14:11:31'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Está tudo ok',
      timestamp: '2025-02-17 14:05:52'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Assim que confirmar os dados no link me avisa para eu subir para cadastro',
      timestamp: '2025-02-17 14:02:06'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Obrigada',
      timestamp: '2025-02-17 14:01:46'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: '**CERTIDÃO SIMPLIFICADA.pdf**',
      timestamp: '2025-02-17 13:59:02',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: '**CNPJ.pdf**',
      timestamp: '2025-02-17 13:59:02',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: '**CERTIDÃO DE INTEIRO TEOR.pdf**',
      timestamp: '2025-02-17 13:59:02',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**audio**',
      timestamp: '2025-02-17 13:32:32',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'https://share.jestor.fun/grupovpj/4577ec7116c9c9d454022c6301de7ef2?updateRecord=46.022.187/0001-25',
      timestamp: '2025-02-17 13:32:21'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Ok, vou subir seu cadastro em sistema e te mandar o link para você confirmar se esta tudo certinho',
      timestamp: '2025-02-17 13:27:57'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Boa tarde Regis, tudo bem?',
      timestamp: '2025-02-17 13:27:34'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Coloca pedido por favor de 1 cx codigo 322',
      timestamp: '2025-02-17 12:37:57'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Boa tarde',
      timestamp: '2025-02-17 12:37:13'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Obrigado',
      timestamp: '2025-02-13 14:55:29'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Cada embalagem vai com 3 peças, pesando aprox. 800g',
      timestamp: '2025-02-13 14:55:22'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**imagem**',
      timestamp: '2025-02-13 14:54:55',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Qual o peso de cada embalagem?',
      timestamp: '2025-02-13 14:51:01'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'E esses?',
      timestamp: '2025-02-13 14:48:47'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: '**CATÁLOGO TODO DIA.pdf**',
      timestamp: '2025-02-13 14:48:42',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Você costuma comprar ele com qual preço?',
      timestamp: '2025-02-13 14:30:27'
    },
    {
      sender: 'user' as const,
      senderName: 'Regis',
      content: 'Mesmo assim está caro',
      timestamp: '2025-02-13 14:19:59'
    },
    {
      sender: 'system' as const,
      senderName: 'Vendedora Iven',
      content: 'esse vão 14 peças e no porcionado vão 24 embalagens com 2 peças cada embalagem',
      timestamp: '2025-02-13 14:19:21'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**imagem**',
      timestamp: '2025-02-13 14:18:57',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Deixa eu ver com a.minha esposa o filé mignon',
      timestamp: '2025-02-13 14:15:41'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Denver está muito caro',
      timestamp: '2025-02-13 14:14:46'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**imagem**',
      timestamp: '2025-02-13 14:14:01',
      isImage: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**cowboy-denver.pdf**',
      timestamp: '2025-02-13 14:13:34',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: '**file mignon cabeça.pdf**',
      timestamp: '2025-02-13 14:12:33',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Temos sim, é o nosso Cowboy.',
      timestamp: '2025-02-13 14:12:25'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Congelado',
      timestamp: '2025-02-13 14:11:06'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Porcionado e queria saber se você tem o Denver',
      timestamp: '2025-02-13 14:10:57'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Vamos lá',
      timestamp: '2025-02-13 14:10:36'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'O filé mignon que você gostaria é a peça ou porcionado?',
      timestamp: '2025-02-13 14:10:33'
    },
    {
      sender: 'system' as const,
      senderName: 'Regis',
      content: 'Tudo bom',
      timestamp: '2025-02-13 14:10:24'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora Iven',
      content: 'Boa tarde Regis, é a VPJ.',
      timestamp: '2025-02-13 14:10:10'
    }
  ].reverse(); // Inverte a ordem para mostrar do mais antigo para o mais recente

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-900">Ex. 5: Transferência para mesa de vendas sem atenção adequada</h2>
        <span className="text-xs text-gray-500">Fev/25 a Mar/25</span>
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
                  RE
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
                <div className={`${
                  message.senderName === 'Vendedora Iven' 
                    ? 'bg-blue-600' 
                    : 'bg-purple-600'
                } text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold`}>
                  {message.senderName === 'Vendedora Iven' ? 'VI' : 'VM'}
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

export default AnalysisChat5; 