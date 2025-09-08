// DateFilter.js
import React, { useState } from 'react';

const DateFilter = ({ onFilterChange }) => {
  const [customRange, setCustomRange] = useState({ start: '', end: '' });

  const handleFilter = (type) => {
    onFilterChange(type, customRange);
  };

  return (
    <div style={{ marginBottom: "1rem", background: "#f5f5f5", padding: "1rem" }}>
      <span style={{ fontWeight: "bold" }}>Filter by Date:</span>
      <button onClick={() => handleFilter("today")}>Today</button>
      <button onClick={() => handleFilter("week")}>This Week</button>
      <span>
        Custom Range:
        <input
          type="date"
          value={customRange.start}
          onChange={e => setCustomRange({ ...customRange, start: e.target.value })}
        />
        -
        <input
          type="date"
          value={customRange.end}
          onChange={e => setCustomRange({ ...customRange, end: e.target.value })}
        />
        <button onClick={() => handleFilter("custom")}>Apply</button>
      </span>
      <button onClick={() => handleFilter("all")}>All Tasks</button>
    </div>
  );
};

export default DateFilter;
