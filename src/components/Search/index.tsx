import { useState } from 'react';

import { SearchButton, SearchContainer, SearchForm, SearchInput } from './style';

type Props = {
  searchQuery?: any,
  placeholderSearch?: string;
  updateSearch?: any;

}

export function Search ({ searchQuery, placeholderSearch, updateSearch }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

 
  const handleChange = (event: any) => {

  
      setQuery(event.target.value);
  };

  const handleSubmit = (event: any) => {
      event.preventDefault();
      console.log("query", query)
      searchQuery(query);

  };

  return (
      <SearchContainer>
          <SearchForm 
              onSubmit={handleSubmit} 

          >
              <SearchInput 
                  type="text" 
                  placeholder={placeholderSearch}
                  value={query} 
                  onChange={handleChange} 

              />
              <SearchButton 
                  type="submit"
              >
                  Pesquisar
              </SearchButton>
          </SearchForm>

      </SearchContainer>
  );
};