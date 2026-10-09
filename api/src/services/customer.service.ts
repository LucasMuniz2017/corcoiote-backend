import prisma from '../lib/prisma.ts';
import type { CreateCustomer, UpdateCustomer } from '../schemas/customer.schemas.ts';
import type { Customer } from '../type/customer.type.ts';

export async function findAllCustomers(): Promise<Customer[]> {
  return await prisma.customer.findMany({ orderBy: { createdAt: 'desc'} });
}

export async function findCustomerById(id: number): Promise<Customer> {
  const customer = await prisma.customer.findUnique({ where: { id } });

  if (!customer) throw new Error('Cliente não encontrado');

  return customer;
}

export async function insertCustomer(datas: CreateCustomer): Promise<Customer> {
  return await prisma.customer.create({ data: datas });
}

export async function modifyCustomer(id: number, datas: UpdateCustomer): Promise<Customer> {
  await findCustomerById(id);

  const customer = await prisma.customer.update({
    where: { id },
    data: datas
  });

  return customer;
}

export async function removeCustomer(id: number): Promise<void> {
  await findCustomerById(id);
  
  await prisma.customer.delete({where: { id } });
}