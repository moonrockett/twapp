import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: var(--tg-theme-bg-color, #ffffff);
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--tg-theme-hint-color, #999999);
`;

const NavLink = styled(Link)`
  color: var(--tg-theme-link-color, #0088cc);
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/boosters">Boosters</NavLink>
      <NavLink to="/referrals">Referrals</NavLink>
    </FooterContainer>
  );
};

export default Footer;