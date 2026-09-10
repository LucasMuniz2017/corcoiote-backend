import users from '../mocks/user.mock.ts';
import type { User, CreateUser } from '../type/user.type.ts';

export function findAllUsers(): User[] {
  return users;
}

export function findUserById(id: number): User {
  const user = users.find((user) => user.id === id);

  if (!user) throw new Error(`Usuário de id ${id} não encontrado.`); 

  return user;
}

export function insertUser({
  name,
  email,
  password
}: CreateUser): User {
  const user: User = {
    id: users[users.length - 1].id + 1,
    name,
    email,
    password
  };

  users[users.length] = user;

  return user;
}