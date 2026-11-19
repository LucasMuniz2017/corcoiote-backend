export async function getAllInvoices() {
  const response = await fetch('/api/invoices');

  return await response.json();
}
