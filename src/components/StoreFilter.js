import React from "react";

function StoreFilter({ stores, selectedStore, onFilterChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ marginRight: "10px" }}>Filter by Store:</label>
      <select value={selectedStore} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Stores</option>
        {stores.map((store, index) => (
          <option key={index} value={store}>
            {store}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StoreFilter;
