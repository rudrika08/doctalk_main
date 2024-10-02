import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const steps = [
  { step: '1', title: 'Register or Login', description: 'Create your account to get started' },
  { step: '2', title: 'Choose Doctor', description: 'Select a doctor based on your symptoms' },
  { step: '3', title: 'Get Consultation', description: 'Consult virtually or schedule a visit' },
  { step: '4', title: 'Receive Care', description: 'Follow up and receive ongoing care' }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">How It Works</h2>
        <Row>
          {steps.map((step, index) => (
            <Col md={3} key={index} className="text-center">
              <div className="step-number mb-3">{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
