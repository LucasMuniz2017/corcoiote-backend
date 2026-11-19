import InvoiceTable from './InvoiceTable.tsx';

import { useState, useEffect } from 'react';

import { getAllInvoices } from './requestInvoice.ts';

import type { Invoice } from './invoiceType.ts';

export default function InvoicePage() {
  const [invoice, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    async function get() {
      const datas = await getAllInvoices();

      setInvoices(datas);
    }

    get();
  }, []);

  return (
    <>
      <h1>Faturas</h1>

      <div className="panel">
        <InvoiceTable datas={invoice} />
      </div>
    </>
  );
}
