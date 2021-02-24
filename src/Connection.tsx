import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Connection() {
    return (
      <div className="connectionPage">
        
           <div>
                <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Nom d'utilisateur :</Form.Label>
                    <Form.Control type="username" placeholder="Entrez un nom d'utilisateur" />
                </Form.Group>

            </Form>
            <div>
                <Button variant="primary" type="submit">
                    Connexion
                </Button>
            </div>
           </div>
      </div>
    );
  }