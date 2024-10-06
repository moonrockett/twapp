import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Box, Button, TextField } from '@mui/material';

const StyledCard = styled.div`
    background-color: var(--card-background);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BoosterButton = styled.button`
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: #FFFFFF;
    background-color: ${({ color, active }) => active ? color : '#808080'};
    opacity: ${({ active }) => active ? 1 : 0.6};

    &:hover {
        transform: ${({ active }) => active ? 'translateY(-3px)' : 'none'};
        box-shadow: ${({ active }) => active ? '0 6px 12px rgba(0, 0, 0, 0.2)' : 'none'};
    }
`;

const BoosterTimer = styled.div`
    font-size: 12px;
    opacity: 0.8;
`;

const BoosterProgress = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    background-color: rgba(255,255,255,0.3);
    width: ${({ progress }) => progress}%;
`;

const ChannelName = styled.div`
    font-size: 12px;
    opacity: 0.8;
    margin-top: 5px;
`;

const ActivationCodeInputs = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const CodeInput = styled(TextField)`
    width: 40px;
    input {
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
    }
`;

const BoostersTab = ({ showPopup }) => {
    const [boosters, setBoosters] = useState([
        { id: 1, name: 'Fusion Frenzy', active: true, timeLeft: 86400, color: '#FF6B6B', channelLink: 'https://t.me/booster1channel', channelName: '@booster1channel', description: 'Harness the power of nuclear fusion to supercharge your earnings!' },
        { id: 2, name: 'Solar Wind Surge', active: true, timeLeft: 43200, color: '#4ECDC4', channelLink: 'https://t.me/booster2channel', channelName: '@booster2channel', description: 'Ride the cosmic currents and boost your TON generation.' },
        { id: 3, name: 'Quantum Quasar', active: false, timeLeft: 0, color: '#9B59B6', channelLink: 'https://t.me/booster3channel', channelName: '@booster3channel', description: 'Tap into quantum mechanics for mind-bending profit increases.' },
        { id: 4, name: 'Nebula Nexus', active: true, timeLeft: 75600, color: '#3498DB', channelLink: 'https://t.me/booster4channel', channelName: '@booster4channel', description: 'Connect to the cosmic web and amplify your earning potential.' },
        { id: 5, name: 'Gravity Slingshot', active: true, timeLeft: 54000, color: '#F1C40F', channelLink: 'https://t.me/booster5channel', channelName: '@booster5channel', description: 'Use gravitational forces to accelerate your TON accumulation.' },
        { id: 6, name: 'Dark Matter Dynamo', active: false, timeLeft: 0, color: '#34495E', channelLink: 'https://t.me/booster6channel', channelName: '@booster6channel', description: 'Harness the mysterious power of dark matter for exponential growth.' },
        { id: 7, name: 'Cosmic Catalyst', active: true, timeLeft: 21600, color: '#16A085', channelLink: 'https://t.me/booster7channel', channelName: '@booster7channel', description: 'Ignite a chain reaction of earnings across the universe.' },
        { id: 8, name: 'Pulsar Propulsion', active: true, timeLeft: 10800, color: '#E74C3C', channelLink: 'https://t.me/booster8channel', channelName: '@booster8channel', description: 'Synchronize with the beat of pulsars for rhythmic profit boosts.' },
        { id: 9, name: 'Antimatter Accelerator', active: false, timeLeft: 0, color: '#8E44AD', channelLink: 'https://t.me/booster9channel', channelName: '@booster9channel', description: 'Collide matter and antimatter to generate unparalleled earnings.' },
        { id: 10, name: 'Wormhole Wealth', active: true, timeLeft: 1800, color: '#D35400', channelLink: 'https://t.me/booster10channel', channelName: '@booster10channel', description: 'Traverse space-time shortcuts to fast-track your TON accumulation.' },
    ]);
    const [activationCode, setActivationCode] = useState(['', '', '', '', '']);
    const [previousLetter, setPreviousLetter] = useState('A'); // This would be fetched from your backend

    useEffect(() => {
        const timer = setInterval(() => {
            setBoosters(prevBoosters => 
                prevBoosters.map(booster => ({
                    ...booster,
                    timeLeft: Math.max(0, booster.timeLeft - 1),
                    active: booster.timeLeft > 0
                }))
            );
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleCodeChange = (index, value) => {
        const newCode = [...activationCode];
        newCode[index] = value.toUpperCase();
        setActivationCode(newCode);
    };

    const showBoosterInfo = (booster) => {
        showPopup(
            <Box>
                <Typography variant="h4" gutterBottom>{booster.name}</Typography>
                <Typography variant="h6" gutterBottom style={{ color: booster.color }}>
                    Status: {booster.active ? 'Active' : 'Inactive'}
                </Typography>
                <Typography variant="body1" paragraph>
                    {booster.description}
                </Typography>
                <Typography variant="body2" paragraph>
                    Time Left: {booster.active ? formatTime(booster.timeLeft) : 'Inactive'}
                </Typography>
                <Typography variant="body2" paragraph>
                    Channel: {booster.channelName}
                </Typography>
                {booster.active ? (
                    <Button 
                        variant="contained" 
                        color="primary" 
                        href={booster.channelLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Channel
                    </Button>
                ) : (
                    <Box>
                        <Typography variant="body2" gutterBottom>
                            To reactivate, enter the latest 5 letters from the channel posts:
                        </Typography>
                        <ActivationCodeInputs>
                            <CodeInput
                                value={previousLetter}
                                disabled
                                variant="outlined"
                            />
                            {activationCode.map((letter, index) => (
                                <CodeInput
                                    key={index}
                                    value={letter}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    variant="outlined"
                                    inputProps={{ maxLength: 1 }}
                                />
                            ))}
                        </ActivationCodeInputs>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => handleBoosterActivation(booster)}
                            disabled={activationCode.some(letter => letter === '')}
                            style={{ marginTop: '20px' }}
                        >
                            Activate Booster
                        </Button>
                    </Box>
                )}
            </Box>
        );
    };

    const handleBoosterActivation = (booster) => {
        // Here you would verify the activation code with your backend
        console.log(`Activating booster: ${booster.name} with code: ${activationCode.join('')}`);
        setBoosters(prevBoosters => 
            prevBoosters.map(b => 
                b.id === booster.id ? { ...b, active: true, timeLeft: 86400 } : b
            )
        );
        setActivationCode(['', '', '', '', '']);
        showPopup(
            <Box>
                <Typography variant="h6" gutterBottom>Booster Activated!</Typography>
                <Typography variant="body1">
                    {booster.name} has been successfully activated for 24 hours.
                </Typography>
            </Box>
        );
    };

    return (
        <StyledCard>
            <Typography variant="h4" gutterBottom>Boosters</Typography>
            <Typography variant="body1" paragraph>
                Activate and maintain boosters to maximize your TON earnings. Each active booster multiplies your base earnings!
            </Typography>
            {boosters.map(booster => (
                <BoosterButton 
                    key={booster.id} 
                    color={booster.color}
                    active={booster.active}
                    onClick={() => showBoosterInfo(booster)}
                >
                    <div>
                        {booster.name}
                        <BoosterTimer>
                            {booster.active ? `Resets: ${formatTime(booster.timeLeft)}` : 'Inactive'}
                        </BoosterTimer>
                        <ChannelName>{booster.channelName}</ChannelName>
                    </div>
                    {booster.active && <BoosterProgress progress={(booster.timeLeft / 86400) * 100} />}
                </BoosterButton>
            ))}
        </StyledCard>
    );
};

export default BoostersTab;