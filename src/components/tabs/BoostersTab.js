import React from 'react';
import styled from 'styled-components';

const BoostersTabContainer = styled.div`
  padding: 20px;
`;

const BoostersTab = () => {
  return (
    <BoostersTabContainer>
      <h2>Boosters Tab</h2>
      <p>Here you can find information about our boosters.</p>
    </BoostersTabContainer>
  );
};

export default BoostersTab;