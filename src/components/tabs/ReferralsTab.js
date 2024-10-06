import React from 'react';
import styled from 'styled-components';

const ReferralsTabContainer = styled.div`
  padding: 20px;
`;

const ReferralsTab = () => {
  return (
    <ReferralsTabContainer>
      <h2>Referrals Tab</h2>
      <p>Check your referrals and rewards here.</p>
    </ReferralsTabContainer>
  );
};

export default ReferralsTab;