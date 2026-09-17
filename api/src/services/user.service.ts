import users from '../mocks/user.mock.ts';
import type { User, CreateUser, UpdateUser } from '../type/user.type.ts';

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

export function modifyUser(id: number, {
  name,
  email, 
  password
}: UpdateUser): User {
  const user = users.find((user) => user.id === id);

  if (!user) throw new Error(`Usuário de id ${id} não encontrado.`); 

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;

  return user;
}

export function removeUser(id:number) {
  function findIndex() {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        return i;
      }
    }

    return -1;
  };

  const index = findIndex();

  if (index === -1)
    throw new Error(`Usuário de id ${id} não encontrado.`);

  users.splice(index, 1);
}