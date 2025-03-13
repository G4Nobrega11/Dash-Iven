export interface RegistrationData {
  month: string;
  registrations: number;
}

export const registrationData: RegistrationData[] = [
  { month: 'Set/24', registrations: 37 },
  { month: 'Out/24', registrations: 40 },
  { month: 'Nov/24', registrations: 24 },
  { month: 'Dez/24', registrations: 33 },
  { month: 'Jan/25', registrations: 47 },
  { month: 'Fev/25', registrations: 66 }
];

export const calculateTotalRegistrations = (data: RegistrationData[]): number => {
  return data.reduce((sum, item) => sum + item.registrations, 0);
}; 