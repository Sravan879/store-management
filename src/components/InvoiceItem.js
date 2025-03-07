import React from "react";

function InvoiceItem({ invoice }) {
  // Assume invoice has these fields: quantity, regularPrice, tax, etc.
  const totalWithoutTax = invoice.quantity * invoice.regularPrice;
  const totalWithTax = totalWithoutTax + invoice.tax;

  return (
    <li style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "5px" }}>
      <strong>{invoice.storeName}</strong> - {invoice.orderId} - {invoice.date}
      <br />
      Grand Total (with Tax): ${totalWithTax.toFixed(2)}
    </li>
  );
}

export default InvoiceItem;
