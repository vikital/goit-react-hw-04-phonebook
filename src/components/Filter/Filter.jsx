import { Input } from 'components/ContactForm/ContactForm.styled';
import React from 'react';

function Filter({ filter, setFilter }) {
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <Input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}

export default Filter;
