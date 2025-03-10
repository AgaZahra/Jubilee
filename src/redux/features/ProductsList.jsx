import React from 'react';
import { useGetProductsQuery } from '../api/productApi'; 
import SingleCard from '../../components/SingleCard'; 
import { Col, Row } from 'react-bootstrap';

const ProductsList = () => {
  // Məhsul məlumatlarını çəkirik
  const { data: products = [], isLoading, isError } = useGetProductsQuery(); 

  // Yüklənmə vəziyyəti
  if (isLoading) return <div>Loading...</div>;

  // Xəta vəziyyəti
  if (isError) return <div>Error loading products</div>;

  return (
    <div>
      
      <div className="products-list">
        <Row>
 {products.map((product) => (
          <SingleCard key={product.id} allData={product} />
        ))}
        </Row>
       
      </div>
    </div>
  );
};

export default ProductsList;