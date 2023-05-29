import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'; 
import imgSchool from '../assets/iconschool.jpg'; 

function Ecole() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        if(response.data ) {
          setData(response.data);
        } else {
          console.log('Invalid data format');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {data ? data.map((item) => (
          <Col md={4} key={item.id}>
            <Card className='img-fluid'> 
              <Card.Img variant="top" style={{width: '40%', margin:'auto'}} /> 
              <Card.Body> 
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content.substring(0, 100)}</Card.Text>
                <a className='btn btn-outline-dark space' href={"/ecole/"+item._id}>Voir plus</a>
              </Card.Body>
            </Card>
          </Col>  
        )) : null}
      </Row>
    </Container>
  );
}

export default Ecole;
