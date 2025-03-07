import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import ProductForm from "../components/ProductForm";
import StoreFilter from "../components/StoreFilter";
import SearchBar from "../components/SearchBar";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [selectedStore, setSelectedStore] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  };

  const handleAddProduct = (newProduct) => {
    axios.post("http://localhost:5000/products", newProduct).then((res) => {
      setProducts([...products, res.data]);
    });
  };

  const handleUpdateProduct = (updatedProduct) => {
    axios.put(`http://localhost:5000/products/${updatedProduct.id}`, updatedProduct).then(() => {
      setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
      setEditingProduct(null);
      setSelectedProduct(null);
    });
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then(() => {
      setProducts(products.filter((p) => p.id !== id));
      if (selectedProduct && selectedProduct.id === id) {
        setSelectedProduct(null);
      }
    });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setEditingProduct(null);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setSelectedProduct(null);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  // Unique store names for filter dropdown
  const storeNames = Array.from(new Set(products.map((product) => product.storeName)));

  // Filter products by store and search term
  const filteredProducts = products.filter((product) => {
    return (
      (selectedStore === "" || product.storeName === selectedStore) &&
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Management</h2>
      <StoreFilter stores={storeNames} selectedStore={selectedStore} onFilterChange={setSelectedStore} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {editingProduct ? (
        <ProductForm
          initialData={editingProduct}
          onSubmit={(data) => handleUpdateProduct({ ...editingProduct, ...data })}
          onCancel={handleCancelEdit}
        />
      ) : (
        <ProductForm onSubmit={handleAddProduct} />
      )}

      <ProductList products={filteredProducts} onSelectProduct={handleSelectProduct} onDeleteProduct={handleDeleteProduct} />
      {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} onEdit={handleEditProduct} />}
    </div>
  );
}

export default ProductPage;
