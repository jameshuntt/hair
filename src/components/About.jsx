import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'

class About extends Component {
    render () {
        return (
            <div>
                <Container>
                    <Row className="About">
                        <Col>
                            <h1>About us</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p>Located at 1537 Central Ave, we have proudly servicing 
                            upstate New York since January 2016. Prior to the opening of 
                            Texture Hair Studio, we had been working under the name "Provana 
                            Hair Studio" beginning in 2006.</p>
                            <br></br>
                            <p>We pride ourselves knowing that we have easily accessible parking 
                            and an easy to find location on Central Ave.</p>
                            <br></br>
                            <p>We recommend calling ahead to reserve a time. There is no telling 
                            how many appointments we have on a given day, therefore walk ins 
                            are not recommended.</p>
                            <br></br>
                            <p>With our team of friendly and experienced staff, we strive to deliver 
                            the haircut that you have always wanted.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About