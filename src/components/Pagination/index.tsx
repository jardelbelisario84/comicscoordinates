import { PaginationContainer, PaginationItem } from './style'


export function Pagination () {
  return (
    <div>
      <PaginationContainer>
          <PaginationItem bgPagintationActive={true}>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
          <PaginationItem>5</PaginationItem>
          <PaginationItem>6</PaginationItem>
          <PaginationItem>7</PaginationItem>
          <PaginationItem>8</PaginationItem>
      </PaginationContainer>
    </div>
  )
}