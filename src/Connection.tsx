import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Connection() {
    return (
      <div className="Connection">
        <header className="Connection-header">
            
        </header>
        <body>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Nom d'utilisateur :</Form.Label>
                    <Form.Control type="username" placeholder="Entrez un nom d'utilisateur" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Mot de passe :</Form.Label>
                    <Form.Control type="password" placeholder="Entrez un mot de passe" />
                </Form.Group>

            </Form>
            <div>
                <Button variant="primary" type="submit">
                    Connexion
                </Button>
            </div>
        </body>
      </div>
    );
  }