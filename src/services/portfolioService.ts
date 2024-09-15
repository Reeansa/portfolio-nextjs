import { Portfolio } from "@/interfaces/portfolio";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchPortfolios = async (): Promise<Portfolio[]> => {
  const response = await fetch(`${API_URL}/portfolio`);
  if (!response.ok) {
    throw new Error('Failed to fetch portfolios');
  }
  const result = await response.json();
  return result.data;
};

export const fetchPortfolioById = async (id: number): Promise<Portfolio> => {
  const response = await fetch(`${API_URL}/portfolio/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch portfolio');
  }
  return response.json();
};
