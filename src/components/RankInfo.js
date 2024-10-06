import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

const RankCard = styled.div`
    background-color: var(--card-background);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
`;

const RankImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
`;

const RankInfo = ({ rank, onClick }) => {
    return (
        <RankCard onClick={onClick}>
            <Box display="flex" alignItems="center">
                <RankImage src={rank.image} alt={rank.name} />
                <Box ml={2}>
                    <Typography variant="h6">{rank.name}</Typography>
                    <Typography variant="body2">Scale: {rank.scale}</Typography>
                    <Typography variant="body2">+{rank.baseTonPerHour} TON per hour</Typography>
                </Box>
            </Box>
        </RankCard>
    );
};

export default RankInfo;