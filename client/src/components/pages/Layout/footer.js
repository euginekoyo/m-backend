import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  backdrop-filter: blur(8px); /* Apply blur effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
`;

const Footer = () => {
    const developerName = process.env.REACT_APP_DEVELOPER_NAME;
    const companyName = process.env.REACT_APP_COMPANY_NAME;

    return (
        <FooterWrapper>
            <p>Developed by {developerName} at {companyName}</p>
        </FooterWrapper>
    );
};

export default Footer;
