import { Invoice } from "./invoiceType.ts";

interface InvoiceRowProps {
  data: Invoice;
}

export default function InvoiceRow({ data }: InvoiceRowProps) {
  const { customer, amount, issueDate, dueDate, status } = data;

  return <tr>
    <td>{customer.name}</td>
    <td>{amount}</td>
    <td>{issueDate}</td>
    <td>{dueDate}</td>
    <td>{status}</td>
  </tr>;
}