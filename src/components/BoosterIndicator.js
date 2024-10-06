import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const IndicatorContainer = styled.div`
    background-color: var(--card-background);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

const BoosterDots = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;

const BoosterDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ active }) => active ? 'var(--success-color)' : 'var(--inactive-color)'}; 
    transition: background-color 0.3s ease;
    margin: 2px;
`;

const BoosterIndicator = ({ activeBoosters, totalBoosters, onClick }) => {
    return (
        <IndicatorContainer onClick={onClick}>
            <Typography variant="subtitle2" gutterBottom>BOOSTERS ACTIVE</Typography>
            <BoosterDots>
                {[...Array(totalBoosters)].map((_, index) => (
                    <BoosterDot key={index} active={index < activeBoosters} />
                ))}
            </BoosterDots>
            <Typography variant="h6">{activeBoosters}x</Typography>
            <Typography variant="body2">Boost Multiplier</Typography>
        </IndicatorContainer>
    );
};

export default BoosterIndicator;