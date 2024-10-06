import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 10;
    color: var(--text-color);
`;

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
        <ToggleButton onClick={toggleTheme}>
            {isDarkMode ? '🌞' : '🌙'}
        </ToggleButton>
    );
};

export default ThemeToggle;