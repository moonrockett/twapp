import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import RankInfo from './RankInfo';
import BoosterIndicator from './BoosterIndicator';

const StyledCard = styled.div`
    background-color: var(--card-background);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

const BalanceDisplay = styled(motion.div)`
    background-color: var(--primary-color);
    color: #FFFFFF;
    border-radius: 15px;
    padding: 20px;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(88, 101, 242, 0.3);
`;

const MainTab = ({ showPopup }) => {
    const [balance, setBalance] = useState(123456);
    const [rank, setRank] = useState({
        name: 'Protostar',
        scale: '1/7 (Beginner)',
        baseTonPerHour: 1,
        image: 'protostar.svg'
    });
    const [activeBoosters, setActiveBoosters] = useState(2);
    const totalBoosters = 10; // Updated to 10

    useEffect(() => {
        const timer = setInterval(() => {
            setBalance(prevBalance => prevBalance + rank.baseTonPerHour * activeBoosters / 3600);
        }, 1000);

        return () => clearInterval(timer);
    }, [rank.baseTonPerHour, activeBoosters]);

    const showRankInfo = () => {
        showPopup(
            <Box>
                <Typography variant="h4" gutterBottom>{rank.name}</Typography>
                <Typography variant="h6" gutterBottom>Scale: {rank.scale}</Typography>
                <Typography variant="body1" paragraph>
                    As a {rank.name}, you're at the beginning of your cosmic journey. Your stellar core is forming, and you're learning to harness the power of TON.
                </Typography>
                <Typography variant="body1" paragraph>
                    Current earnings: +{rank.baseTonPerHour} TON per hour
                </Typography>
                <Typography variant="body2">
                    Keep growing your network and activating boosters to evolve into higher ranks!
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Learn More About Ranks
                </Button>
            </Box>
        );
    };

    const showBoosterInfo = () => {
        showPopup(
            <Box>
                <Typography variant="h4" gutterBottom>Boosters</Typography>
                <Typography variant="body1" paragraph>
                    Boosters amplify your TON earning power. Activate and maintain them to maximize your profits!
                </Typography>
                <Typography variant="body1">
                    Active Boosters: {activeBoosters}/{totalBoosters}
                </Typography>
                <Typography variant="body1">
                    Current Multiplier: {activeBoosters}x
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ marginTop: '20px' }}
                    onClick={() => {/* Navigate to Boosters tab */}}
                >
                    Manage Boosters
                </Button>
            </Box>
        );
    };

    return (
        <div>
            <RankInfo rank={rank} onClick={showRankInfo} />
            <BoosterIndicator 
                activeBoosters={activeBoosters} 
                totalBoosters={totalBoosters} 
                onClick={showBoosterInfo}
            />
            <StyledCard>
                <Typography variant="h6">Your Balance</Typography>
                <BalanceDisplay
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {balance.toFixed(6).padStart(10, '0')} TON
                </BalanceDisplay>
            </StyledCard>
            <StyledCard>
                <Typography variant="h6" gutterBottom>Daily Earnings</Typography>
                <Typography variant="body1">
                    You're currently earning {(rank.baseTonPerHour * activeBoosters * 24).toFixed(2)} TON per day.
                </Typography>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                    Activate more boosters to increase your earnings!
                </Typography>
            </StyledCard>
        </div>
    );
};

export default MainTab;