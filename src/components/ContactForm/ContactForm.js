/* import React, { useState } from 'react';
import {
  ContactFormWrapper,
  Form,
  InputGroup,
  InputGroupItem,
  FullWidthInputGroupItem,
  SubmitButton,
  MobileMediaQuery
} from './ContactFormStyles';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); */
    // Handle form submission logic here

    // Reset the form fields
    /* setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactFormWrapper>
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroupItem>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputGroupItem>
          <InputGroupItem>
            <label htmlFor="email" placeholder='Email'>Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroupItem>
        </InputGroup>
        <MobileMediaQuery>
          <InputGroup>
            <FullWidthInputGroupItem>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FullWidthInputGroupItem>
          </InputGroup>
        </MobileMediaQuery>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ContactFormWrapper>
  );
};

export default ContactForm;
 */