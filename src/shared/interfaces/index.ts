export interface ITodo {
  id: number;
  attributes: {
    status: string;
    title: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    selected?: boolean;
  };
}
