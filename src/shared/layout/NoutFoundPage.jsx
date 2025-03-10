import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <section className="not-found-page">
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <div className="content">
                <h3>404</h3>
                <p> Page not found</p>
                <Link to='/' className='btn btn-not'> </Link>
                </div>
                </Col>
            </Row>
        </Container>

      </section>

    </>
  )
}

export default NotFoundPage