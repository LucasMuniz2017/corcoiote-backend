import { InvoiceStatus } from "./invoiceType";

export function formatCurrency(value: number): string {
  const formatter = Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: 'BRL'
  });

  return formatter.format(value / 100);
}

export function formatDate(date: string): string {
  const formatter = Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'

  });

  return formatter.format(new Date(`${date}T00:00:00`));
}

export function formatStatus(status: InvoiceStatus) {
  return status === 'paid' ? 'paga' : 'pendente';
}