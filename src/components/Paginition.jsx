import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginition = ({ currentPage, totalPages, onPageChange }) => {

    const pageNumbers = [];
  for (let i = 1; i <= totalPages && i <= 5; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <Pagination className="custom-pagination">
      <Pagination.First 
        className="custom-pagination-item" 
        onClick={() => handlePageChange(1)} 
        disabled={currentPage === 1} 
      />
      <Pagination.Prev 
        className="custom-pagination-item" 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1} 
      />
      
      {pageNumbers.map((page) => (
        <Pagination.Item
          key={page}
          className="custom-pagination-item"
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      
      <Pagination.Next 
        className="custom-pagination-item" 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages} 
      />
      <Pagination.Last 
        className="custom-pagination-item" 
        onClick={() => handlePageChange(totalPages)} 
        disabled={currentPage === totalPages} 
      />
    </Pagination>
  );
};

export default Paginition;
