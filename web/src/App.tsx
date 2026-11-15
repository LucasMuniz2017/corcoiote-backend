import { useState, useEffect } from 'react';

import { get } from './request.ts';

import InvoicePage from './InvoicePage.tsx';

export default function App() {
  const  [invoices, setInvoices] = useState([]);

  useEffect(() => {
    async function getInvoices() {
      const datas = await get();
  
      setInvoices(datas);
    }
  
    getInvoices();
  }, []);


  return (
    <main>
      <InvoicePage datas={invoices} />
    </main>
  );
}
