import React, { ReactNode } from 'react';

interface KPIBalloonProps {
  title: ReactNode;
  value: ReactNode;
  icon: ReactNode;
  isHighlighted?: boolean;
}

const KPIBalloon: React.FC<KPIBalloonProps> = ({ title, value, icon, isHighlighted = false }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg shadow-md p-4 min-h-[180px] w-full ${
        isHighlighted ? 'bg-blue-100 scale-105' : 'bg-white'
      }`}
    >
      <div className="text-gray-700 mb-3">{icon}</div>
      <div className="text-2xl font-bold text-gray-900 mb-2 text-center break-words w-full">{value}</div>
      <div className="text-sm text-gray-600 text-center w-full">{title}</div>
    </div>
  );
};

export default KPIBalloon;
