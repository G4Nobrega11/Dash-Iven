import React from 'react';
import { initialSalesData, SalesData } from '../data/salesData';
import AverageTicket from './AverageTicket';

interface TicketCountsProps {
  data: SalesData[];
}

const TicketCounts: React.FC<TicketCountsProps> = ({ data }) => {
  // Use initialSalesData (realized data) for calculations
  const realizedData = initialSalesData;

  const totalNewReactivatedSales = realizedData.reduce((sum, item) => sum + item.newReactivatedSales, 0);
  const totalNewReactivatedOrders = realizedData.reduce((sum, item) => sum + item.newReactivatedOrders, 0);
  const totalRecurringSales = realizedData.reduce((sum, item) => sum + item.recurringSales, 0);
  const totalRecurringOrders = realizedData.reduce((sum, item) => sum + item.recurringOrders, 0);

  const averageNewReactivatedTicket = totalNewReactivatedOrders > 0 ? totalNewReactivatedSales / totalNewReactivatedOrders : 0;
  const averageRecurringTicket = totalRecurringOrders > 0 ? totalRecurringSales / totalRecurringOrders : 0;

  return (
    <div className="py-4 border-t border-gray-200">
      <div className="flex justify-around mb-4">
        <AverageTicket title="Ticket Médio Novos/Reativados" value={averageNewReactivatedTicket} />
        <AverageTicket title="Ticket Médio Recorrentes" value={averageRecurringTicket} />
      </div>
    </div>
  );
};

export default TicketCounts;
