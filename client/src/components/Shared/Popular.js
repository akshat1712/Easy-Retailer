import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


export default function Popular( {login})
{
    return (
        <Container fluid>
            <div className='pop-container'>
                <Row>
                    <div className="popular">
                        <h3 id='pop-items'>Popular Items</h3>
                    </div>

                </Row>
                <Row>
                    {!login? 
                    <div className="popular">
                        <h3 id='pop-retailers'>Popular Retailers</h3>
                    </div>: <></> }
                </Row>
            </div>
        </Container>
    )
}