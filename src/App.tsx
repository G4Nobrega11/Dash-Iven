import React, { useState } from 'react';
import KPIBalloon from './components/KPIBalloon';
import SalesChart from './components/SalesChart';
import { calculateKPIs, initialSalesData, formatCurrency, calculateProjections, SalesData } from './data/salesData';
import { ShoppingCart, TrendingUp, DollarSign, BarChart, CreditCard } from 'lucide-react';

const App: React.FC = () => {
  const [projectionPeriod, setProjectionPeriod] = useState<'6m' | '1y' | '3y' | '5y' | 'none'>('1y');
  const projectedData = calculateProjections(initialSalesData, projectionPeriod);
  const kpis = calculateKPIs(initialSalesData);

    // Calculate the final projected value
  const finalProjectedValue = projectionPeriod !== 'none' ? projectedData[projectedData.length - 1].totalSales : undefined;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dashboard de Vendas</h1>
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
          title="Total de Pedidos (Acumulado até Fev/25)"
          value={kpis.totalOrders}
          icon={<BarChart className="text-purple-500" size={40} />}
        />
        <KPIBalloon
          title="Ticket Médio Geral"
          value={formatCurrency(kpis.averageTicket)}
          icon={<CreditCard className="text-yellow-500" size={40} />}
        />
        {finalProjectedValue !== undefined && (
          <KPIBalloon
            title={<span className="text-lg font-semibold">Projeção Final</span>}
            value={<span className="text-3xl font-bold text-purple-600">{formatCurrency(finalProjectedValue)}</span>}
            icon={<TrendingUp className="text-purple-500" size={40} />}
          />
        )}
      </div>
      <SalesChart projectionPeriod={projectionPeriod} setProjectionPeriod={setProjectionPeriod} />
    </div>
  );
};

export default App;
