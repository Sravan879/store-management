import React from "react";

function ProductList({ products, onSelectProduct, onDeleteProduct }) {
  return (
    <div>
      <h3>Product List</h3>
      <ul style={{ padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "5px", listStyle: "none" }}>
            <strong>{product.productName}</strong> - {product.storeName} - ${product.price}
            <div style={{ marginTop: "5px" }}>
              <button onClick={() => onSelectProduct(product)} style={{ marginRight: "10px" }}>View/Edit</button>
              <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
