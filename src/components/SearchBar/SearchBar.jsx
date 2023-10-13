import React, { useState, useCallback } from 'react';
import {
  SearchBarHeader,
  SearchButton,
  SearchForm,
  SearchInput,
} from './SearchBar.styled';

function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const addInputData = useCallback(
    (e) => {
      e.preventDefault();
      if (value.length < 1) return;
      onSubmit(value.toLowerCase().trim());
    },
    [onSubmit, value]
  );

  const getInputData = (e) => {
    setValue(e.target.value);
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={addInputData}>
        <SearchButton type="submit"></SearchButton>
        <SearchInput
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={getInputData}
        />
      </SearchForm>
    </SearchBarHeader>
  );
}

export default Searchbar;