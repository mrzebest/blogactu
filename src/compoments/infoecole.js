// Imports de modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Imports de composants de Bootstrap
import { Container, Card, Button } from 'react-bootstrap';

// Imports de styles
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

// Imports d'assets
import imgSchool from '../assets/iconschool.jpg'; 

function InfoEcole() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteEcole = (data) => {
    axios.delete(`http://localhost:3000/posts/${data._id}`)
      .then(response => {
        window.location.replace("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Container className='corps'>
      <Card className="mb-3 card-form" style={{maxWidth: '80%', margin:'auto'}}>
        <Card.Img variant="top"  style={{width: '100%'}} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text style={{ padding: '25px'}}>
            {data.content}
          </Card.Text>
          <div style={{ padding: '25px'}}>
          <Button variant="none" className='btn-outline-dark'  href={`/ecole/updateecole/${data._id}`}>Modifier</Button>
          <Button variant="none" className='btn-outline-danger' onClick={() => deleteEcole(data)} style={{marginLeft: '10px'}}>Supprimer</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default InfoEcole;
