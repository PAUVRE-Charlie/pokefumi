import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-bootstrap/ToggleButton'



export function Matches() {

    const [link, setLink]=useState("")


    return (
      <div className="Matches">
        <header className="Matches-header">
            
        </header>
        <body>
            <div className="Matches_container" >
            <Form inline>
                <Row>
                <Col>
                <div>
                    
                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                    Choisir un adversaire
                </Form.Label>

                <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                custom
                >
                        <option value="0">Choisir un joueur</option>
                        <option value="1">Charlie</option>
                        <option value="2">Ton oncle en slip</option>
                        <option value="3">Nathan Olborki</option>
                        <option value="4">Rapha Krodal</option>
                </Form.Control>
                    
                </div>

                <Button type="submit" className="my-1">
                    Inviter le joueur
                </Button>
                </Col>
            <Col>
            <div>
                <Button type="button" disabled={link==""?false:true} onClick={() => setLink("jaaj")}>
                    Créer un match vide
                </Button>
                <label>
                    {link}
                </label>
            </div>
            </Col>
            </Row>
            </Form>
            </div>
        </body>
      </div>
    );
  }