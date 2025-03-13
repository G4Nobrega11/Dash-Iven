export interface SalesData {
  month: string;
  newReactivatedSales: number;
  newReactivatedOrders: number;
  recurringSales: number;
  recurringOrders: number;
  totalSales: number;
  totalOrders: number;
  isProjected?: boolean;
}

const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const formatMonth = (month: string) => {
  const [m, y] = month.split('/');
  if (monthNames.includes(m)) {
    return month; // Already formatted
  }
  const monthIndex = parseInt(m, 10) - 1;
  return `${monthNames[monthIndex]}/${y}`;
}

export const initialSalesData: SalesData[] = [
  { month: 'Set/24', newReactivatedSales: 5038.35, newReactivatedOrders: 5, recurringSales: 0.00, recurringOrders: 0, totalSales: 5038.35, totalOrders: 5 },
  { month: 'Out/24', newReactivatedSales: 37714.93, newReactivatedOrders: 23, recurringSales: 17443.88, recurringOrders: 13, totalSales: 55158.81, totalOrders: 36 },
  { month: 'Nov/24', newReactivatedSales: 52944.41, newReactivatedOrders: 11, recurringSales: 37906.65, recurringOrders: 30, totalSales: 90851.06, totalOrders: 41 },
  { month: 'Dez/24', newReactivatedSales: 81831.38, newReactivatedOrders: 26, recurringSales: 54477.88, recurringOrders: 33, totalSales: 136309.26, totalOrders: 59 },
  { month: 'Jan/25', newReactivatedSales: 136011.67, newReactivatedOrders: 29, recurringSales: 31336.30, recurringOrders: 41, totalSales: 167347.97, totalOrders: 70 },
  { month: 'Fev/25', newReactivatedSales: 113429.00, newReactivatedOrders: 59, recurringSales: 132240.14, recurringOrders: 48, totalSales: 245669.14, totalOrders: 107 },
].map(data => ({ ...data, month: formatMonth(data.month) }));

export const calculateProjections = (data: SalesData[], period: '6m' | '1y' | '3y' | '5y' | 'none'): SalesData[] => {
  if (period === 'none') {
    return data;
  }

  // Marcar dados reais
  const realData = data.map(item => ({ ...item, isProjected: false }));
  const projectedData = [...realData];
  const lastRealMonth = data[data.length - 1];
  let numMonths;

  switch (period) {
    case '6m':
      numMonths = 6;
      break;
    case '1y':
      numMonths = 12;
      break;
    case '3y':
      numMonths = 36;
      break;
    case '5y':
      numMonths = 60;
      break;
    default:
      numMonths = 12;
  }

  // Encontrar o índice do último mês real
  const [lastMonth, lastYear] = lastRealMonth.month.split('/');
  let currentMonthIndex = monthNames.indexOf(lastMonth);
  let currentYear = parseInt(lastYear, 10);

  for (let i = 0; i < numMonths; i++) {
    // Avançar para o próximo mês
    currentMonthIndex++;
    if (currentMonthIndex >= 12) {
      currentMonthIndex = 0;
      currentYear++;
    }

    const monthYear = `${monthNames[currentMonthIndex]}/${currentYear.toString().slice(-2)}`;
    const prevMonthData = projectedData[projectedData.length - 1];

    const newReactivatedSales = prevMonthData.newReactivatedSales * 1.025;
    const recurringSales = prevMonthData.totalSales * 0.8;
    const totalSales = newReactivatedSales + recurringSales;

    const newReactivatedOrders = Math.round(prevMonthData.newReactivatedOrders * 1.03);
    const recurringOrders = Math.round(prevMonthData.recurringOrders * 1.01);
    const totalOrders = newReactivatedOrders + recurringOrders;

    projectedData.push({
      month: monthYear,
      newReactivatedSales,
      newReactivatedOrders,
      recurringSales,
      recurringOrders,
      totalSales,
      totalOrders,
      isProjected: true
    });
  }

  return projectedData;
};

export const calculateKPIs = (data: SalesData[]) => {
  const totalRevenue = data.reduce((sum, item) => sum + item.totalSales, 0);
  const lastMonthRevenue = data[data.length - 1].totalSales;
  const secondToLastMonthRevenue = data[data.length - 2].totalSales;
  const growthPercentage = ((lastMonthRevenue - secondToLastMonthRevenue) / secondToLastMonthRevenue) * 100;
  const totalOrders = data.reduce((sum, item) => sum + item.totalOrders, 0);
  const averageTicket = totalRevenue / totalOrders;

  return {
    totalRevenue,
    lastMonthRevenue,
    growthPercentage,
    totalOrders,
    averageTicket,
  };
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};
