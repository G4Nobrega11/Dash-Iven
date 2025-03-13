import React, { ReactNode } from 'react';

interface KPIBalloonProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  isHighlighted?: boolean;
}

const KPIBalloon: React.FC<KPIBalloonProps> = ({ title, value, icon, isHighlighted = false }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg shadow-md p-6 w-48 ${
        isHighlighted ? 'bg-blue-100 scale-105' : 'bg-white'
      }`}
    >
      <div className="text-gray-700 mb-2">{icon}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{title}</div>
    </div>
  );
};

export default KPIBalloon;
