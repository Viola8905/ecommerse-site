import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import ToyList from '../components/ToyList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
	return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
					<TypeBar/>
				</Col>
        <Col md={9}>
					<BrandBar/>
					<ToyList/>
				</Col>
      </Row>
    </Container>
  );
};

export default Shop;
