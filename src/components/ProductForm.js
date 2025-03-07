import React, { useState, useEffect } from "react";

function ProductForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    storeName: "",
    productName: "",
    description: "",
    price: ""
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset only when adding a new product (not editing)
    if (!initialData) {
      setFormData({ storeName: "", productName: "", description: "", price: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "15px" }}>
      <h3>{initialData ? "Edit Product" : "Add Product"}</h3>
      <input
        type="text"
        name="storeName"
        placeholder="Store Name"
        value={formData.storeName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="productName"
        placeholder="Product Name"
        value={formData.productName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <button type="submit" style={{ marginRight: "10px" }}>
        {initialData ? "Update Product" : "Add Product"}
      </button>
      {initialData && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ProductForm;
