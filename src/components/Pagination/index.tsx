import { useEffect, useState } from 'react';

import { PaginationContainer, PaginationItem } from './style';

type Props = {
  itemsPorPagina: any,
  totalItems: any,
  paginate: any,
  maxPagesVisible: number,
  pageAction?: number
}

export function Pagination({
  itemsPorPagina, totalItems, paginate,  maxPagesVisible, pageAction = 1
}: Props) {



  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState<any>([]);



  const totalPages = Math.ceil(totalItems / itemsPorPagina);
  const lastPageInRange = Math.min(totalPages - 1, pageAction + Math.floor((maxPagesVisible - 2) / 2));
  const firstPageInRange = Math.max(2, lastPageInRange - maxPagesVisible + 3);

  useEffect(() => {
    
    const pages = [];

    for (let i = firstPageInRange; i <= lastPageInRange; i++) {
      pages.push(i);
    }

    setVisiblePages(pages);
    
  }, [currentPage, totalPages, pageAction]);

  
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <div>
      
          <PaginationContainer>

          {totalPages > 1 && (
          <>
            <PaginationItem  
            onClick={() => handlePageClick(1)}
            bgPaginationActive={1 === pageAction}>    
                  1
            </PaginationItem>


            {visiblePages[0] !== 2 && <span>...</span>}
          </>
          
          )}
          {visiblePages.map((number: number) => (
            <>
              <PaginationItem 
                key={number}  
                onClick={() => handlePageClick(number)} 
                bgPaginationActive={number === pageAction}>    
                {number}
              </PaginationItem>
            </>

          ))}

          
          {totalPages > 1 && (

          <>
           {visiblePages[4] !== totalPages - 1 && <span>...</span>}
            <PaginationItem  
              onClick={() => handlePageClick(totalPages)}
              bgPaginationActive={totalPages === pageAction}>    
              {totalPages}
            </PaginationItem>
          </>
          )}
             
          </PaginationContainer>
      
    </div>
  )
}

