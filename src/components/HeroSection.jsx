import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section text-center d-flex align-items-center" style={{ backgroundImage: 'url(https://assets.telegraphindia.com/telegraph/2022/Mar/1646866043_mbbs.jpg)', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <h1 className="text-black mb-4">Get Connected to Doctors, Anytime, Anywhere</h1>
        <p className="text-black-50 mb-5">Book virtual or in-person consultations through DocTalk</p>
        <Button
        style={{ 'width': '20%' }}
        variant="primary" size="lg" onClick={() => alert('Booking Now!')}>Book Now</Button>
      </Container>
    </section>
  );
};

export default HeroSection;
