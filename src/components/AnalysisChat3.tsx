import React from 'react';

interface ChatMessage {
  sender: 'system' | 'user';
  senderName?: string;
  content: string;
  timestamp: string;
  isReaction?: boolean;
  isFile?: boolean;
  isImage?: boolean;
}

const AnalysisChat3: React.FC = () => {
  const messages: ChatMessage[] = [
    {
      sender: 'user' as const,
      senderName: 'Vendedora',
      content: 'Oi Henrique, financeiro não consegue estar liberando um prazo no momento, somente no pix e no cartão em até 2x',
      timestamp: '2025-02-24 17:08:48'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Obrigada pela compreensão e pode deixar que vou te mantendo informado.',
      timestamp: '2025-02-20 16:31:01'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Estou a disposição',
      timestamp: '2025-02-20 16:04:48'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Mas caso precise de alguma coisa da nossa parte, pode me chamar',
      timestamp: '2025-02-20 16:04:44'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Boa tarde Vendedora, tudo bem? Ficaaa em paz. Obrigado pelo retorno mas entendo que o processo de análise leva um tempo',
      timestamp: '2025-02-20 16:04:32'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Oi boa tarde Henrique, não esqueci de você não viu rsrsr To esperando ainda o retorno do financeiro, já cobrei eles hoje!',
      timestamp: '2025-02-20 15:32:13'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Boa tarde Henrique, assim que o financeiro me retornar eu te aviso 🤗',
      timestamp: '2025-02-19 12:50:38'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Tenha um ótimo dia',
      timestamp: '2025-02-19 10:54:53'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Bom dia, combinado aguardo seu retorno',
      timestamp: '2025-02-19 10:54:44'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Vou fazer a solicitação do prazo',
      timestamp: '2025-02-18 15:50:39'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Obrigada',
      timestamp: '2025-02-18 15:50:31'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Feito',
      timestamp: '2025-02-18 15:48:42'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'https://share.jestor.fun/grupovpj/4577ec7116c9c9d454022c6301de7ef2?updateRecord=47.682.221/0001-50',
      timestamp: '2025-02-18 15:46:16'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'só confirma os dados para mim por favor',
      timestamp: '2025-02-18 15:46:15'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Obrigada',
      timestamp: '2025-02-18 15:46:06'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**imagem**',
      timestamp: '2025-02-18 15:41:34',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**imagem**',
      timestamp: '2025-02-18 15:41:34',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**imagem**',
      timestamp: '2025-02-18 15:41:34',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**imagem**',
      timestamp: '2025-02-18 15:41:33',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250204050220_comprovante.pdf**',
      timestamp: '2025-02-18 15:41:33',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**laticinios piloto.pdf**',
      timestamp: '2025-02-18 15:41:33',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**CARTAO CNPJ.pdf**',
      timestamp: '2025-02-18 15:41:33',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250204075558_comprovante.pdf**',
      timestamp: '2025-02-18 15:41:32',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250206040240_comprovante.pdf**',
      timestamp: '2025-02-18 15:41:32',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250212062602_comprovante.pdf**',
      timestamp: '2025-02-18 15:41:32',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250204032934_comprovante.pdf**',
      timestamp: '2025-02-18 15:41:31',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250212034954_comprovante.pdf**',
      timestamp: '2025-02-18 15:41:31',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250212042518_comprovante.pdf**',
      timestamp: '2025-02-18 15:41:31',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**val di fiemme.pdf**',
      timestamp: '2025-02-18 15:41:30',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**vimacedo.pdf**',
      timestamp: '2025-02-18 15:41:30',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**dux.pdf**',
      timestamp: '2025-02-18 15:41:30',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**videira.pdf**',
      timestamp: '2025-02-18 15:41:30',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**Comprovante_03-02-2025_160032.pdf**',
      timestamp: '2025-02-18 15:41:30',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**mg distribuidora.pdf**',
      timestamp: '2025-02-18 15:41:29',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**pj 2.pdf**',
      timestamp: '2025-02-18 15:41:29',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**seara ok.pdf**',
      timestamp: '2025-02-18 15:41:29',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**savana palmito.pdf**',
      timestamp: '2025-02-18 15:41:29',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Vou precisar de 3 NF do ramo alimentício e uma foto do estabelecimento para encaminhar para eles',
      timestamp: '2025-02-18 15:39:34'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Ok, vou precisar fazer a solicitação de prazo para nosso financeiro então, pois a principio é liberado via pix ou cartão em 2x',
      timestamp: '2025-02-18 15:37:59'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '7 14 21DD',
      timestamp: '2025-02-18 15:22:35'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Claro! Vocês trabalham com qual forma de pagamento com os outros fornecedores?',
      timestamp: '2025-02-18 15:22:13'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Pode seguir por gentileza com esses itens para análise?',
      timestamp: '2025-02-18 15:06:34'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '01 CX DE CONTRA FILÉ  01 CX DE FRALDINHA  01 CX DE COSTELA DUROC',
      timestamp: '2025-02-18 15:06:21'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: '**imagem**',
      timestamp: '2025-02-18 14:29:49',
      isImage: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'PODE POR GENTILEZA ME PASSAR OS VALORES DO SEGUINTES ITENS',
      timestamp: '2025-02-18 14:16:33'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Por gentileza cotar os seguintes itens:   01 CX DE CONTRA FILÉ  01 CX DE PICANHA ANGUS  01 CX DE FRALDINHA  01 CX DE ALCATRA  01 CX DE CUPIM  01 CX DE PICANHA DUROC 01 CX DE COSTELA DUROC',
      timestamp: '2025-02-18 14:16:21'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250212062602_comprovante.pdf**',
      timestamp: '2025-02-18 14:05:37',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250204050220_comprovante.pdf**',
      timestamp: '2025-02-18 14:05:37',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250206040240_comprovante.pdf**',
      timestamp: '2025-02-18 14:05:37',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**laticinios piloto.pdf**',
      timestamp: '2025-02-18 14:05:37',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**videira.pdf**',
      timestamp: '2025-02-18 14:05:36',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**Comprovante_03-02-2025_160032.pdf**',
      timestamp: '2025-02-18 14:05:36',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250204032934_comprovante.pdf**',
      timestamp: '2025-02-18 14:05:36',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250212034954_comprovante.pdf**',
      timestamp: '2025-02-18 14:05:36',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**20250204075558_comprovante.pdf**',
      timestamp: '2025-02-18 14:05:36',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**seara ok.pdf**',
      timestamp: '2025-02-18 14:05:35',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**val di fiemme.pdf**',
      timestamp: '2025-02-18 14:05:35',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**dux.pdf**',
      timestamp: '2025-02-18 14:05:35',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**vimacedo.pdf**',
      timestamp: '2025-02-18 14:05:35',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**savana palmito.pdf**',
      timestamp: '2025-02-18 14:05:34',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**pj 2.pdf**',
      timestamp: '2025-02-18 14:05:34',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**mg distribuidora.pdf**',
      timestamp: '2025-02-18 14:05:34',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**CARTAO CNPJ.pdf**',
      timestamp: '2025-02-18 14:05:34',
      isFile: true
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: '**CONTRATO SOCIAL AP.pdf**',
      timestamp: '2025-02-18 14:05:33',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Sim, eu subo seu CNPJ para cadastro, mas ele só será efetivado após primeiro pedido. Vou precisar agora somente do contrato social!',
      timestamp: '2025-02-18 14:04:44'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: '**CATÁLOGO TODO DIA.pdf**',
      timestamp: '2025-02-18 14:03:18',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: '**Apresentação Linha Grill.pdf**',
      timestamp: '2025-02-18 14:03:18',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: '**VPJ - Black Angus VPJ.pdf**',
      timestamp: '2025-02-18 14:03:08',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: '**Cordeiro Dorper VPJ.pdf**',
      timestamp: '2025-02-18 14:03:08',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: '**VPJ Duroc Pork.pdf**',
      timestamp: '2025-02-18 14:03:08',
      isFile: true
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Mando sim',
      timestamp: '2025-02-18 14:02:56'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Quais são os documentos que você precisa para cadastro?',
      timestamp: '2025-02-18 13:36:17'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Precisa de incialmente um pedido para subir junto ao cadastro?',
      timestamp: '2025-02-18 13:36:08'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Sim mas você poderia me encaminhar o catálogo?',
      timestamp: '2025-02-18 13:35:47'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Os produtos você já conhece?',
      timestamp: '2025-02-18 13:34:26'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Ok, vou subir seu CNPJ para cadastro',
      timestamp: '2025-02-18 13:34:18'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Para comprar diretamente de vocês',
      timestamp: '2025-02-18 13:31:48'
    },
    {
      sender: 'system' as const,
      senderName: 'ARMAZÉM DO POVO',
      content: 'Olá Vendedora, tudo bem? Obrigado pelo retorno. Gostaria de estar realizando um cadastro com a VPJ',
      timestamp: '2025-02-18 13:31:34'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Como posso estar te ajudando?',
      timestamp: '2025-02-18 13:31:14'
    },
    {
      sender: 'user' as const,
      senderName: 'Comercial VPJ Alimentos',
      content: 'Boa tarde Henrique, é a Vendedora da VPJ alimentos! Vou dar andamento no seu atendimento por aqui.',
      timestamp: '2025-02-18 13:31:03'
    }
  ].reverse(); // Inverte a ordem para mostrar do mais antigo para o mais recente

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-900">Ex. 1: Cliente atacadista - cadastro aprovado sem efetivação de pedido</h2>
        <span className="text-xs text-gray-500">18/Fev a 24/Fev</span>
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
                    : message.sender === 'user' 
                      ? 'bg-blue-500 text-white rounded-br-none' 
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
              } ${message.isReaction ? 'italic bg-transparent' : ''} max-w-[200px] md:max-w-[250px] lg:max-w-[300px]`}
            >
              {message.senderName && (
                <div className={`text-xs ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-600'} mb-1`}>
                  {message.sender === 'user' ? 'Vendedora' : message.senderName}
                </div>
              )}
              
              <p className={`text-xs ${
                message.isFile 
                  ? 'text-blue-600 font-medium' 
                  : message.isImage 
                    ? 'text-purple-600 font-medium'
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

export default AnalysisChat3; 