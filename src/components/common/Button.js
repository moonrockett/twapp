import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.primary};
  border: none;
  padding: 10px 20px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  box-shadow: ${props => props.theme.shadows.button};
  transition: all 0.3s;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    box-shadow: ${props => props.theme.shadows.inset};
  }
`;

const Button = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;