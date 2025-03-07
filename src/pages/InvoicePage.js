import React, { useState, useEffect } from "react";
import axios from "axios";
import InvoiceItem from "../components/InvoiceItem";

function InvoicePage() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/invoices").then((res) => setInvoices(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </ul>
    </div>
  );
}

export default InvoicePage;
