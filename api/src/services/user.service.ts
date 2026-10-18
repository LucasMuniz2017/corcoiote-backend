import prisma from '../lib/prisma.ts';
import type { CreateUser, UpdateUser } from '../schemas/user.schemas.ts';
import type { User } from '../type/user.type.ts';

export async function findAllUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}

export async function findUserById(id: number): Promise<User> {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) throw new Error(`Usuário de id ${id} não encontrado.`);

  return user;

}

export async function insertUser(datas: CreateUser): Promise<User> {
  return await prisma.user.create({ data: datas });
}

export async function modifyUser(id: number, datas: UpdateUser): Promise<User> {
  await findUserById(id);

  const user = await prisma.user.update({
    where: { id },
    data: datas
  });

  return user;

}

export async function removeUser(id: number): Promise<void> {
  await findUserById(id);

  await prisma.user.delete({ where: { id } });
}