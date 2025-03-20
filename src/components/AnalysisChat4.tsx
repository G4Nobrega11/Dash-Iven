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
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'ah tá entendi, lembrando que os pedidos devem ser programados tá, pra entrar em rota de produção.',
      timestamp: '2025-03-07 16:13:13'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '**audio**',
      timestamp: '2025-03-07 16:08:56',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '**audio**',
      timestamp: '2025-03-07 16:08:23',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Boa tarde Eduardo, tudo bem?',
      timestamp: '2025-03-07 16:05:49'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**ESPECIAL BACON - 25 A 07 DE MARÇO.pdf**',
      timestamp: '2025-02-26 08:30:44',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Bom dia Daniel, tudo bem?  Vamos efetivar seu cadastro, com um primeiro pedido?',
      timestamp: '2025-02-21 09:37:15'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Olá Eduardo! Seu cadastro com a VPJ Alimentos foi finalizado e, a partir de agora, estarei à disposição para acompanhá-lo(a) em seus atendimentos. Podemos dar continuidade ao seu pedido?',
      timestamp: '2025-02-20 17:38:33'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Mandei a ficha técnica deles para você.',
      timestamp: '2025-02-20 17:18:13'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**531.pdf**',
      timestamp: '2025-02-20 17:17:46',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**993.pdf**',
      timestamp: '2025-02-20 17:17:46',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Mandei para cadastro, assim que liberar colocamos seu pedido',
      timestamp: '2025-02-20 16:54:10'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'tenho sim!! vou te mandar',
      timestamp: '2025-02-20 16:53:52'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**imagem**',
      timestamp: '2025-02-20 16:53:43',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: 'Tem fotos ?',
      timestamp: '2025-02-20 16:52:48'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: 'Valores',
      timestamp: '2025-02-20 16:52:37'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'eu tenho o bacon em cubos e fatiado',
      timestamp: '2025-02-20 16:45:36'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: 'Uso',
      timestamp: '2025-02-20 16:45:25'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'bacon você usa?',
      timestamp: '2025-02-20 16:45:19'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'sim, e é o que eu mais vendo aqui.',
      timestamp: '2025-02-20 16:43:29'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: 'O Classic seria mais saboroso?',
      timestamp: '2025-02-20 16:42:37'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Pode faze a retirada sim, caso não atinge o valor do pedido mínimo.  o de 180g que é o blend, ele é mistura de acém e peito. o de 180g que é o classic angus, ele é feito dos recortes da nossa desossa diária, digamos que ele não tenha uma "receita" ao certo.',
      timestamp: '2025-02-20 16:36:04'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '**audio**',
      timestamp: '2025-02-20 16:29:45',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Para efetivar o pedido, precisamos por um primeiro pedido.  você chegou a ver os valores?',
      timestamp: '2025-02-20 16:28:24'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**reação**',
      timestamp: '2025-02-20 16:27:46',
      isReaction: true
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '**imagem**',
      timestamp: '2025-02-20 16:27:18',
      isImage: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'https://share.jestor.fun/grupovpj/4577ec7116c9c9d454022c6301de7ef2?updateRecord=55371359000167',
      timestamp: '2025-02-20 16:22:27'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Na caixa do HB cód 1371, vão 28 peças Na caixa do HB 622 e 986, vão 66 peças',
      timestamp: '2025-02-20 16:16:50'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Em laranja, cód do item Em amarelo, peso aproximado da caixa Em verde, preço do kg Em azul preço, equivalente a uma caixa',
      timestamp: '2025-02-20 16:16:24'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**imagem**',
      timestamp: '2025-02-20 16:16:21',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: 'Ta ok',
      timestamp: '2025-02-20 16:14:30'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**audio**',
      timestamp: '2025-02-20 16:12:58',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '**audio**',
      timestamp: '2025-02-20 16:11:05',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**audio**',
      timestamp: '2025-02-20 15:24:00',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '**audio**',
      timestamp: '2025-02-20 15:23:01',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: '**audio**',
      timestamp: '2025-02-20 15:17:55',
      isAudio: true
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '**audio**',
      timestamp: '2025-02-20 15:16:45',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'De 180g, temos o blend que é acém e peito  o classic Angus Na linha black Angus, tenho o de costela, 180g. O de costela foi eleito o melhor do Brasil.   O de pernil de cordeiro nosso é de 150g',
      timestamp: '2025-02-20 15:08:23'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'ah legal.',
      timestamp: '2025-02-20 15:04:51'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '**audio**',
      timestamp: '2025-02-20 15:00:48',
      isAudio: true
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Ah legal, estamos próximos, somos de Pirassununga.   Qual gramatura de HB você trabalha atualmente?',
      timestamp: '2025-02-20 14:59:12'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: '55371359000167',
      timestamp: '2025-02-20 14:57:22'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Poderia me informar seu CNPJ Eduardo?',
      timestamp: '2025-02-20 14:57:03'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: 'Algum representante próximo',
      timestamp: '2025-02-20 14:56:50'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: 'Queria saber sobre os hambúrguer da VPJ',
      timestamp: '2025-02-20 14:56:44'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Me chamo Kelviene e farei seu atendimento Eduardo, como eu posso te ajudar?',
      timestamp: '2025-02-20 14:54:35'
    },
    {
      sender: 'system' as const,
      senderName: 'Eduardo Nicoletto',
      content: 'Bem !',
      timestamp: '2025-02-20 14:47:18'
    },
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Oi Eduardo, vi que você se registrou no formulário de parcerias no site (www.VPJALIMENTOS.com.br). Está tudo bem?',
      timestamp: '2025-02-20 14:47:06'
    }
  ].reverse(); // Inverte a ordem para mostrar do mais antigo para o mais recente

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-900">Ex. 4: Cliente hamburgueria - negociação técnica com 16 trocas de áudio</h2>
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
                  EN
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

export default AnalysisChat4; 