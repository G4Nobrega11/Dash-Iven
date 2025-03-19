import React from 'react';
import KPIBalloon from './components/KPIBalloon';
import SalesChart from './components/SalesChart';
import RegistrationChart from './components/RegistrationChart';
import AnalysisChat from './components/AnalysisChat';
import AnalysisChat2 from './components/AnalysisChat2';
import AnalysisChat3 from './components/AnalysisChat3';
import AnalysisChat4 from './components/AnalysisChat4';
import AnalysisChat5 from './components/AnalysisChat5';
import { calculateKPIs, initialSalesData, formatCurrency } from './data/salesData';
import { registrationData, calculateTotalRegistrations } from './data/registrationData';
import { ShoppingCart, TrendingUp, DollarSign, BarChart, CreditCard, UserPlus } from 'lucide-react';

const App: React.FC = () => {
  const kpis = calculateKPIs(initialSalesData);
  const totalRegistrations = calculateTotalRegistrations(registrationData);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dashboard de Vendas - IVEN / VPJ Alimentos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
        <KPIBalloon
          title={<span className="text-lg font-semibold">Faturamento Total (Realizado)</span>}
          value={<span className="text-3xl font-bold text-blue-600">{formatCurrency(kpis.totalRevenue)}</span>}
          icon={<ShoppingCart className="text-blue-500" size={40} />}
          isHighlighted={true}
        />
        <KPIBalloon
          title={<span className="text-lg font-semibold">Faturamento Último Mês (Fev/25) <span className='text-sm font-normal'>(Realizado)</span></span>}
          value={<span className="text-3xl font-bold text-green-600">{formatCurrency(kpis.lastMonthRevenue)}</span>}
          icon={<DollarSign className="text-green-500" size={40} />}
          isHighlighted={true}
        />
        <KPIBalloon
          title="% de Crescimento (Jan → Fev)"
          value={`${kpis.growthPercentage.toFixed(2)}%`}
          icon={<TrendingUp className="text-red-500" size={40} />}
        />
        <KPIBalloon
          title="Total de Cadastrados/Reativados"
          value={totalRegistrations}
          icon={<UserPlus className="text-indigo-500" size={40} />}
        />
        <KPIBalloon
          title="Total de Pedidos (Acumulado até Fev/25)"
          value={kpis.totalOrders}
          icon={<BarChart className="text-purple-500" size={40} />}
        />
        <KPIBalloon
          title="Ticket Médio Geral"
          value={formatCurrency(kpis.averageTicket)}
          icon={<CreditCard className="text-yellow-500" size={40} />}
        />
      </div>
      <div className="grid grid-cols-1 gap-8">
        <SalesChart />
        <RegistrationChart />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 my-6">Análise de Conversas</h2>
      
      <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-md">
        <h3 className="text-lg font-bold text-red-700 mb-2">⚠️ Atenção às situações críticas:</h3>
        <ul className="list-disc pl-5">
          <li className="text-red-700 mb-1">Cadastros aprovados sem efetivação de pedidos - perda de oportunidade</li>
          <li className="text-red-700 mb-1">Excesso de trocas de áudio sem conversão - ineficiência no processo</li>
          <li className="text-red-700 mb-1">Leads qualificados sem follow-up após conversão - perdas no pós-venda</li>
          <li className="text-red-700 mb-1">Troca de atendentes sem comunicação adequada - experiência ruim do cliente</li>
          <li className="text-red-700 mb-1">Transferência para mesa de vendas sem acompanhamento - risco de perda de cliente</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <AnalysisChat3 />
        <AnalysisChat />
        <AnalysisChat2 />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnalysisChat4 />
        <AnalysisChat5 />
      </div>
    </div>
  );
};

export default App;
