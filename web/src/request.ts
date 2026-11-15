export async function get() {
  const response = await fetch('http://localhost:3000/invoices');

  return await response.json();
}
