import React from 'react';
import { formatCurrency } from '../data/salesData';

interface AverageTicketProps {
  title: string;
  value: number;
}

const AverageTicket: React.FC<AverageTicketProps> = ({ title, value }) => (
  <div>
    <p className="text-sm text-gray-600">{title}</p>
    <p className="text-lg font-bold text-gray-900">{formatCurrency(value)}</p>
  </div>
);

export default AverageTicket;
