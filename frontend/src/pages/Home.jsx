import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        {pizzas.map(pizza => (
          <Col key={pizza.id} sm={12} md={6} lg={4} className="mb-4">
            <CardPizza
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              img={pizza.img}
              ingredients={pizza.ingredients}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
