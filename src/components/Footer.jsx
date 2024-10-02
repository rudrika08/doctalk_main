import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <div className="text-center">
          <p>© 2024 DocTalk. All rights reserved.</p>
          <p>Contact: <a href="mailto:support@doctalk.com" className="text-white">support@doctalk.com</a></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
