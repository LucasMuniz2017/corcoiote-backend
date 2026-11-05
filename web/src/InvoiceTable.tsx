import InvoiceRow from './InvoiceRow.tsx';
import type { Invoice } from './invoiceType.ts';

interface InvoiceTableProps {
  datas: Invoice[];
}

export default function InvoiceTable({ datas }: InvoiceTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Valor</th>
          <th>Emissão</th>
          <th>Vencimento</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((invoice) => (
          <InvoiceRow key={invoice.id} data={invoice} />
        ))}
      </tbody>
    </table>
  );
}
