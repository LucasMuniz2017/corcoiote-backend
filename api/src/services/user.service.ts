import users from '../mocks/user.mock.ts';
import type { User } from '../type/user.type.ts';

export function findAllUsers(): User[] {
  return users;
}
