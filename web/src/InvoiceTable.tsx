import { Invoice } from "./invoiceType.ts";

import InvoiceRow from "./InvoiceRow.tsx";

interface InvoiceTableProps {
  datas: Invoice[];
}

export default function InvoiceTable({ datas }: InvoiceTableProps) {
  return <table>
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
      {datas.map((invoice) => <InvoiceRow data={invoice} />)}
    </tbody>
  </table>;
}