import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTabButton = styled.button`
  background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: white;
  }
`;

const TabButton = ({ children, active, onClick, ...props }) => {
  return (
    <StyledTabButton active={active} onClick={onClick} {...props}>
      {children}
    </StyledTabButton>
  );
};

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default TabButton;