import React from 'react'
import Card from 'react-bootstrap/Card';

export const Footer = () => {
  return (
    <Card>
      <Card.Footer as='h5'>Easy-Retail</Card.Footer>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Contact us
          </p>
          <footer className="blockquote-footer">
            IIT Ropar
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
