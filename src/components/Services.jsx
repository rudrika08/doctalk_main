import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const services = [
  { title: 'Video Consultation', description: 'Consult with doctors virtually', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuajIjJzxbHf5oHXcEgUNIZCT2FjTEx3bG5g&s' },
  { title: 'In-Person Visits', description: 'Doctors visit your location', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDTi5wQ_K2M-AR7TwMgCcbvHGrkPA0lHC5w&s' },
  { title: 'Prescription Service', description: 'Get prescriptions instantly', image: 'https://media.istockphoto.com/id/1469686707/photo/delivery-worker-hands-holding-medications-parcel.jpg?s=612x612&w=0&k=20&c=XwgJ2dcED8EClXuo-Ik24hbmF5P5SvFvJnETfw0LHzU=' },
  { title: 'AI Symptom Checker', description: 'Check your symptoms online', image: 'https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/Cellphone-symptom-checker_50.jpg' }
];

const Services = () => {
  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="outline-primary" onClick={() => alert(`Learn more about ${service.title}`)}>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
