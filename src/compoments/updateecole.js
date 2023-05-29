import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function UpdateEcole() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id : 25,
      title: title,
      content: content,
      user_id: "6357bc4bc29efc83faea62ca"
    };
    axios.put(`http://localhost:3000/posts/${id}`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        window.location.replace("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container className='corps'>
      <div>
        <h1>Modifier des articles</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center form">
        <Form className='formulaire' onSubmit={handleSubmit}>
          <Form.Group className='formulaire-group' controlId="formName">
            <Form.Label>Titre</Form.Label>
            <Form.Control type="text" placeholder={title} value={title} onChange={(event) => setTitle(event.target.value)} />
          </Form.Group>

          <Form.Group className='formulaire-group' controlId="formAddress">
            <Form.Label>Article</Form.Label>
           
            <Form.Control
              cols="32"
              rows="16"
              as="textarea"
              placeholder={content} value={content} onChange={(event) => setContent(event.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Soumettre
          </Button>
        </Form>
      </div>

    </Container>
  );
}

export default UpdateEcole;
