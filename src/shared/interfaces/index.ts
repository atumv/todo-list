export interface Todo {
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

export interface EditForm {
  title: string;
  description: string;
  status: string;
}
