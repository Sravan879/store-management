import React from "react";

function ProductDetail({ product, onClose, onEdit }) {
  if (!product) return null;
  return (
    <div style={{ border: "1px solid #000", padding: "15px", marginTop: "15px" }}>
      <h3>Product Detail</h3>
      <p>
        <strong>Store Name:</strong> {product.storeName}
      </p>
      <p>
        <strong>Product Name:</strong> {product.productName}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <button onClick={onClose} style={{ marginRight: "10px" }}>Close</button>
      <button onClick={() => onEdit(product)}>Edit</button>
    </div>
  );
}

export default ProductDetail;
