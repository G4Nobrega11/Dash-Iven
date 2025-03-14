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
import { registrationData } from '../data/registrationData';

const RegistrationChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Evolução de Cadastrados/Reativados</h2>
      <div style={{ width: '100%', height: '400px' }}>
        <ResponsiveContainer>
          <LineChart
            data={registrationData}
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
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="registrations"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Cadastrados/Reativados"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RegistrationChart; 