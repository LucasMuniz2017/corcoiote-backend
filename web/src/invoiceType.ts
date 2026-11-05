export type InvoiceStatus = 'paid' | 'pending';

interface Customer {
  id: number;
  name: string;
  email: string;
}

export interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: Customer;
}
