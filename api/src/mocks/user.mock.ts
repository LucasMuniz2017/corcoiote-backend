import type { User } from '../type/user.type.ts';

const users: User[] = [{
  id: 1,
  name: 'Alex Bessa',
  email: 'alex@email.com',
  password: crypto.randomUUID()
}, {
  id: 2,
  name: 'Valdiana Bessa',
  email: 'valdiana@email.com',
  password: crypto.randomUUID()
}, {
  id: 3,
  name: 'Ana Bessa',
  email: 'ana@bessa.cam',
  password: crypto.randomUUID()
}];

export default users;