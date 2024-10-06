import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Box } from '@mui/material';
import { Share, ContentCopy } from '@mui/icons-material';

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

const ReferralLink = styled.div`
    background-color: var(--card-background);
    border-radius: 12px;
    padding: 15px;
    font-size: 14px;
    word-break: break-all;
    margin-bottom: 20px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReferralsTab = () => {
    const referralLink = 'https://t.me/NotCoinEarner_bot?start=ref123456';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        // You could add a toast notification here
    };

    return (
        <StyledCard>
            <Typography variant="h4" gutterBottom>Referrals</Typography>
            <Typography variant="body1" paragraph>
                Grow your cosmic network and earn bonus TON! Invite friends to join the TON ecosystem and boost your earnings.
            </Typography>
            <ReferralLink>
                {referralLink}
            </ReferralLink>
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<ContentCopy />}
                    onClick={copyToClipboard}
                >
                    Copy Link
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    startIcon={<Share />}
                >
                    Share Link
                </Button>
            </Box>
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>Your Referral Stats</Typography>
                <Typography variant="body1">Total Referrals: 5</Typography>
                <Typography variant="body1">TON Earned from Referrals: 100 TON</Typography>
                <Typography variant="body2" mt={2}>
                    Invite 5 more friends to reach the next rank!
                </Typography>
            </Box>
        </StyledCard>
    );
};

export default ReferralsTab;