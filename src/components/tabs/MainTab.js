import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography } from '@mui/material';
import { Equalizer, Speed, TrendingUp } from '@mui/icons-material';

const MainTabContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledCard = styled(Card)`
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const BalanceDisplay = styled(motion.div)`
  background-color: ${props => props.theme.primary};
  color: #FFFFFF;
  border-radius: 15px;
  padding: 20px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const MainTab = () => {
  const [balance, setBalance] = useState(123456);
  const [rank, setRank] = useState({ name: 'Protostar', scale: '1/7', baseTonPerHour: 1 });
  const [boostMultiplier, setBoostMultiplier] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setBalance(prevBalance => prevBalance + (rank.baseTonPerHour * boostMultiplier) / 3600);
    }, 1000);

    return () => clearInterval(timer);
  }, [rank.baseTonPerHour, boostMultiplier]);

  return (
    <MainTabContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <BalanceDisplay
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {balance.toFixed(6).padStart(10, '0')} TON
      </BalanceDisplay>
      <StyledCard>
        <CardContent>
          <IconWrapper>
            <Equalizer color="primary" />
            <Typography variant="h6" component="h2" style={{ marginLeft: 10 }}>
              RANK
            </Typography>
          </IconWrapper>
          <Typography variant="h4" component="p">
            {rank.name}
          </Typography>
          <Typography color="textSecondary">
            Scale: {rank.scale}
          </Typography>
          <Typography color="textSecondary">
            +{rank.baseTonPerHour} TON per hour
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <IconWrapper>
            <Speed color="primary" />
            <Typography variant="h6" component="h2" style={{ marginLeft: 10 }}>
              BOOSTERS ACTIVE
            </Typography>
          </IconWrapper>
          <Typography variant="h4" component="p">
            {boostMultiplier}x
          </Typography>
          <Typography color="textSecondary">
            Boost Multiplier
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <IconWrapper>
            <TrendingUp color="primary" />
            <Typography variant="h6" component="h2" style={{ marginLeft: 10 }}>
              PROFIT PER HOUR
            </Typography>
          </IconWrapper>
          <Typography variant="h4" component="p">
            +{(rank.baseTonPerHour * boostMultiplier).toFixed(2)} TON
          </Typography>
        </CardContent>
      </StyledCard>
    </MainTabContainer>
  );
};

export default MainTab;