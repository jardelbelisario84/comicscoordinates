import { useEffect, useState } from 'react';
import { PaginationContainer, PaginationItem } from './style';



type Props = {
  itemsPorPagina: any,
  totalItems: any,
  paginate: any,
  maxPagesVisible: number,
  pageAction: number
}

export function Pagination({
  itemsPorPagina, totalItems, paginate,  maxPagesVisible, pageAction
}: Props) {



  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState<any>([]);



  const totalPages = Math.ceil(totalItems / itemsPorPagina);
  const lastPageInRange = Math.min(totalPages - 1, currentPage + Math.floor((maxPagesVisible - 2) / 2));
  const firstPageInRange = Math.max(2, lastPageInRange - maxPagesVisible + 3);

  useEffect(() => {

    setCurrentPage(pageAction)
    
    const pages = [];

    for (let i = firstPageInRange; i <= lastPageInRange; i++) {
      pages.push(i);
    }

    setVisiblePages(pages);
    
  }, [currentPage, totalPages]);

  
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <div>
         {/* <PaginationItem bgPagintationActive={true}>{currentPage}</PaginationItem> */}
      
          <PaginationContainer>

          <PaginationItem  onClick={() => handlePageClick(1)} bgPagintationActive={pageAction === currentPage }>    
                1
          </PaginationItem>

          {visiblePages.map((number: number) => (

              <PaginationItem key={number}  onClick={() => handlePageClick(number)} bgPagintationActive={number === currentPage }>    
                {number}
              </PaginationItem>

          ))}
          ...
          <PaginationItem  onClick={() => handlePageClick(totalPages)}>    
          {totalPages}
          </PaginationItem>
             
          </PaginationContainer>
      
    </div>
  )
}

