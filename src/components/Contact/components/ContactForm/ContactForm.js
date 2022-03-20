/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '../../../GlobalComponents';
import ContactFormStyles from './ContactForm.styles';

const ContactForm = () => (
  <div css={ContactFormStyles} className="contactForm">
    <input placeholder="Your Name" type="text" />
    <input placeholder="Last Name" type="text" />
    <input placeholder="E-Mail" type="email" />
    <input placeholder="Your Number" type="number" />
    <textarea placeholder="Your Message *" rows="2"></textarea>
    <Button btnTitle="Send message" />
  </div>
);

export default ContactForm;
