/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Container, Title } from '../GlobalComponents';
import { ContactRow, ContactForm } from './components';
import ContactStyles from './Contact.styles';

const Contact = () => (
  <section css={ContactStyles} className="contact" id="contact">
    <Title subtitle="HAVE QUESTION?" title="CONTACT US" />
    <Container>
      <div className="contactInfo">
        <ContactRow
          contactSubtitle="Address:"
          contactTitle=" 975 Brannon Street , Los Angeles"
        />
        <ContactRow contactSubtitle="Phone:" contactTitle="(708)-931-8926" />
        <ContactRow
          contactSubtitle="Email:"
          contactTitle="Conferapp@gmail.com"
        />
        <ContactRow
          contactSubtitle="Website:"
          contactTitle="Conferapp.netlify.app"
        />
      </div>
      <ContactForm />
    </Container>
  </section>
);

export default Contact;
