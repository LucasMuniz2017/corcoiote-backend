import users from '../mocks/user.mock.ts';
import type { User } from '../type/user.type.ts';

export function findAllUsers(): User[] {
  return users;
}

export function findUserById(id: number): User {
  const user = users.find((user) => user.id === id);

  if (!user) throw new Error(`Usuário de id ${id} não encontrado.`); 

  return user;
}