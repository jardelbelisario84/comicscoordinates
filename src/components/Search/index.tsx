import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchButton, SearchContainer, SearchForm, SearchInput } from './style';

type Props = {
  searchQuery?: any,
  placeholderSearch?: string;

}

export function Search ({ searchQuery, placeholderSearch }: Props) {
    
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

 
  const handleChange = (event: any) => {
      setQuery(event.target.value);
  };

  const handleSubmit = (event: any) => {
      event.preventDefault();
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