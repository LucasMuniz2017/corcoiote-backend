import InvoiceTable from './InvoiceTable.tsx';
import type { Invoice } from './invoiceType.ts';

interface InvoicePageProps {
  datas: Invoice[];
}

export default function InvoicePage(props: InvoicePageProps) {
  return (
    <>
      <h1>Faturas</h1>

      <div className="panel">
        <InvoiceTable datas={props.datas} />
      </div>
    </>
  );
}
