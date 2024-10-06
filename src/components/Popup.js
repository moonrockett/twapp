import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const PopupOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopupContent = styled(motion.div)`
    background-color: var(--card-background);
    padding: 30px;
    border-radius: 20px;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    position: relative;
`;

const CloseButton = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Popup = ({ content, onClose }) => {
    return (
        <PopupOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <PopupContent
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
            >
                <CloseButton onClick={onClose} color="primary">
                    Close
                </CloseButton>
                {content}
            </PopupContent>
        </PopupOverlay>
    );
};

export default Popup;