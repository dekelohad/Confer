/** @jsx jsx */
import { jsx } from '@emotion/core';
import ContactRowStyles from './ContactRow.styles';

const ContactRow = ({ contactSubtitle, contactTitle }) => (
  <div css={ContactRowStyles} className="contactRow">
    <span>{contactSubtitle}</span>
    <p>{contactTitle}</p>
  </div>
);

export default ContactRow;
