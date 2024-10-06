import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: var(--tg-theme-bg-color, #ffffff);
  padding: 10px 20px;
  text-align: center;
  border-bottom: 1px solid var(--tg-theme-hint-color, #999999);
`;

const Title = styled.h1`
  font-size: 18px;
  margin: 0;
  color: var(--tg-theme-text-color, #000000);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Telegram Web App</Title>
    </HeaderContainer>
  );
};

export default Header;