import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './Pricing.css'

class Pricing extends Component {
    render () {
        return (
            <Container>
                <div className="Pricing">
                    <h1>Pricing</h1>
                    <Row>
                        <Col xs={12} md={4}>
                            <h2 className="frank">Frank Staltari</h2>
                            <br></br>
                            <p>Haircuts for men will be priced by age.</p>
                            <br></br>
                            <ul className="pricelist">
                                <li>Mens cut (14+) $20</li>
                                <li>Boys cut (>14) $12</li>
                                <li>Senior citizens (65+) $15</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2 className="sonya">Sonya</h2>
                            <br></br>
                            <p>Haircuts for women will be priced upon time.</p>
                            <br></br>
                            <ul className="pricelist">
                                <li>Womens cut (14+) $22</li>
                                <li>Girls cut (>14) $14</li>
                                <li>Senior citizens (65+) $15</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2 className="pricing">Coloring</h2>
                            <br></br>
                            <p>We offer many styles of hair coloring. Every 
                            customer is unique, therefore pricing may vary.</p>
                            <br></br>
                            <ul className="pricelist">
                                <li>Bleaching $65</li>
                                <li>Highlights $35</li>
                                <li>Full color dye $75</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h2>Veterans Receive 25% off with valid identification.</h2>
                        </Col>
                        <Col>
                        
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Pricing