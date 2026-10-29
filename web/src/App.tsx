import InvoiceTable from "./InvoiceTable.tsx";
import { Invoice } from './invoiceType.ts'

const invoices: Invoice[] = [{
  id: 1,
  amount: 520354,
  status: 'pending',
  issueDate: '2026-09-10',
  dueDate: '2026-10-15',
  customer: {
    id: 5,
    name: 'Contrutora Meridiano',
    email: 'comercial@meridiano.com.br'
  }
}, {
  id: 2,
  amount: 89600,
  status: 'paid',
  issueDate: '2026-10-01',
  dueDate: '2026-10-31',
  customer: {
    id: 1,
    name: 'Gráfica Nova Vida',
    email: 'grafica@novavida.com.br'
  }
}, {
  id: 3,
  amount: 125037,
  status: 'pending',
  issueDate: '2026-10-12',
  dueDate: '2026-11-17',
  customer: {
    id: 8,
    name: 'Tendi Tudo',
    email: 'contato@tenditudo.com.br'
  }
}];

export default function App() {
  return <>
    <InvoiceTable datas={invoices} />
  </>;
}
