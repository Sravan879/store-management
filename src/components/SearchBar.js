import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
