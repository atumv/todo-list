export interface Todo {
  id: number;
  attributes: {
    status: string;
    title: string;
    description: string;
    selected?: boolean;
  };
}

export interface EditForm {
  title: string;
  description: string;
  status: string;
}
