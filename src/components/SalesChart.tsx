import React, { useState } from 'react';
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
import { calculateProjections, initialSalesData, SalesData } from '../data/salesData';
import TicketCounts from './TicketCounts';

const SalesChart: React.FC<{
  projectionPeriod: '6m' | '1y' | '3y' | '5y' | 'none';
  setProjectionPeriod: React.Dispatch<React.SetStateAction<'6m' | '1y' | '3y' | '5y' | 'none'>>;
}> = ({ projectionPeriod, setProjectionPeriod }) => {

  const fullData = calculateProjections(initialSalesData, projectionPeriod);
  const displayedData = fullData;

  const projectionStartMonth = 'Mar/25';

  const isProjectedMonth = (month: string) => {
    if (projectionPeriod === 'none') {
      return false; // No projection, so no projected months
    }

    const [projMonth, projYear] = projectionStartMonth.split('/');
    const [dataMonth, dataYear] = month.split('/');

    // For months that are already in the "Mar/25" format
    if (dataMonth.length === 3) {
      const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
      const projMonthIndex = monthNames.indexOf(projMonth);
      const dataMonthIndex = monthNames.indexOf(dataMonth);

      if (dataYear > projYear) {
        return true;
      } else if (dataYear === projYear) {
        return dataMonthIndex >= projMonthIndex;
      } else {
        return false;
      }
    }
    return false;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Evolução de Vendas</h2>
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">Projeção</span>
          <select
            value={projectionPeriod}
            onChange={(e) => setProjectionPeriod(e.target.value as '6m' | '1y' | '3y' | '5y' | 'none')}
            className="block w-auto px-4 py-2 text-sm leading-5 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="none">Nenhuma</option>
            <option value="6m">6 Meses</option>
            <option value="1y">1 Ano</option>
            <option value="3y">3 Anos</option>
            <option value="5y">5 Anos</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={displayedData}
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
          <Line
            type="monotone"
            dataKey="newReactivatedSales"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={false}
            name="Novos/Reativados"
            strokeDasharray={(dataPoint) => isProjectedMonth(dataPoint.month) ? "5 5" : ""}
          />
          <Line
            type="monotone"
            dataKey="recurringSales"
            stroke="#ffc658"
            strokeWidth={2}
            dot={false}
            name="Recorrentes"
            strokeDasharray={(dataPoint) => isProjectedMonth(dataPoint.month) ? "5 5" : ""}
          />
          <Line
            type="monotone"
            dataKey="totalSales"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
            name="Total"
            strokeDasharray={(dataPoint) => isProjectedMonth(dataPoint.month) ? "5 5" : ""}
          />
        </LineChart>
      </ResponsiveContainer>
      <TicketCounts data={displayedData} />
    </div>
  );
};

export default SalesChart;
