import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CTA = () => {
  return (
    <section className="cta-section text-center py-5">
      <Container>
        <h2 className="mb-4">Ready to get started with DocTalk?</h2>
        <div style={{width : '100%'
        , display : 'flex'
        , justifyContent : 'center'
        , alignItems : 'center',
        gap : '20px'
        }} className="btn">
        <Button 
        style={{'width' : '20%'}}
        variant="success" size="lg" className="mr-3" onClick={() => alert('Sign Up Now')}>Sign Up Now</Button>
        <Button style={{'width' : '20%'}} variant="outline-primary" size="lg" onClick={() => alert('Contact Us')}>Contact Us</Button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
