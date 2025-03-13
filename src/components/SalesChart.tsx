import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { calculateProjections, initialSalesData, SalesData, formatCurrency } from '../data/salesData';
import TicketCounts from './TicketCounts';

type ProjectionPeriod = '6m' | '1y' | '3y' | '5y' | 'none';

const ProjectionChart: React.FC<{
  period: ProjectionPeriod;
  title: string;
}> = ({ period, title }) => {
  const realData = initialSalesData;
  const allData = period === 'none' ? realData : calculateProjections(initialSalesData, period);
  const finalValue = period !== 'none' ? allData[allData.length - 1].totalSales : null;

  const CustomizedDot = (props: any) => {
    const { cx, cy, payload } = props;
    return payload.isProjected ? null : <circle cx={cx} cy={cy} r={4} fill={props.stroke} />;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {finalValue && (
          <div className="text-lg font-semibold text-purple-600">
            Valor Final: {formatCurrency(finalValue)}
          </div>
        )}
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <ResponsiveContainer>
          <LineChart
            data={allData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value: any) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)} />
            <Legend />
            {period === 'none' ? (
              // Dados reais apenas para o gráfico "Realizado"
              <>
                <Line
                  type="monotone"
                  dataKey="newReactivatedSales"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Novos/Reativados"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="recurringSales"
                  stroke="#ffc658"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Recorrentes"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="totalSales"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Total"
                  connectNulls
                />
              </>
            ) : (
              // Apenas linhas projetadas para os gráficos de projeção
              <>
                <Line
                  type="monotone"
                  dataKey="newReactivatedSales"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  dot={false}
                  name="Novos/Reativados"
                  strokeDasharray="5 5"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="recurringSales"
                  stroke="#ffc658"
                  strokeWidth={2}
                  dot={false}
                  name="Recorrentes"
                  strokeDasharray="5 5"
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="totalSales"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={false}
                  name="Total"
                  strokeDasharray="5 5"
                  connectNulls
                />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      {period === 'none' ? (
        <>
          <div className="mt-4 text-sm text-gray-600 mb-4">
            <p>Dados históricos apurados de Set/24 até Fev/25</p>
          </div>
          <TicketCounts data={allData} />
        </>
      ) : (
        <div className="mt-4 text-sm text-gray-600">
          <p><strong>Parâmetros de Projeção:</strong></p>
          <ul className="list-disc pl-5">
            <li>Novos/Reativados: Crescimento de 2.5% ao mês</li>
            <li>Recorrentes: 80% do faturamento total do mês anterior</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const SalesChart: React.FC = () => {
  return (
    <div className="space-y-8">
      <ProjectionChart period="none" title="Evolução de Vendas (Realizado)" />
      <ProjectionChart period="6m" title="Evolução de Vendas (Projeção 6 Meses)" />
      <ProjectionChart period="1y" title="Evolução de Vendas (Projeção 1 Ano)" />
      <ProjectionChart period="3y" title="Evolução de Vendas (Projeção 3 Anos)" />
      <ProjectionChart period="5y" title="Evolução de Vendas (Projeção 5 Anos)" />
    </div>
  );
};

export default SalesChart;
