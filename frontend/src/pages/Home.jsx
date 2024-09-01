import React, {useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      fetch('http://localhost:5000/api/pizzas') 
      .then(response => response.json())
      .then(data => {
        setPizzas(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching pizzas:', error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <Container>
      <Row>
        {pizzas.map((pizza, index) => (
          <Col key={pizza.id} sm={12} md={6} lg={4} className="mb-4">
            <CardPizza
              name={pizza.name}
              desc={pizza.desc}
              img={pizza.img}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;