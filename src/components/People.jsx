import React, { Component } from 'react'
import { Card, Button, Row, Col, Dropdown } from 'react-bootstrap'
import './People.css'
import Expand from './Dropdown'

class People extends Component {
    render () {
        return (
            <div>
                <Row className="People">
                    <Col xs={12} md={4} className="Frank">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="assets/frank.png" />
                    <Card.Body>
                    <Card.Title>Frank Staltari</Card.Title>
                    <Card.Text>
                    <Expand />
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
                </Card>
                    </Col>
                    <Col xs={12} md={4} className="Sonya">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="assets/girl2.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Expand />
                </Card.Body>
                </Card>
                    </Col>
                    <Col xs={12} md={4} className="Someone">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="assets/girl1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                    </Col>
                    </Row>
            </div>
        )
    }
}

export default People