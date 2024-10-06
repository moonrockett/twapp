import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.card};
  padding: 20px;
  margin: 15px 0;
`;

const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;