export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export type CreateUser = Omit<User, 'id' | 'createdAt'>;
export type UpdateUser = Partial<Omit<User, 'id' | 'createdAt'>>;