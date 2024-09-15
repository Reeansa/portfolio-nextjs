export interface PortfolioImage {
    id: number;
    portfolio_id: number;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface Portfolio {
    id: number;
    title: string;
    description: string;
    images: {
        id: number;
        image: string;
    }[];
    stacks: {
        id: number;
        stack: string;
    }[];
    created_at: string;
    updated_at: string;
}

export interface stack {
    id: number;
    stack: string;
    created_at: string;
    updated_at: string;
}
