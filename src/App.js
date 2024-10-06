import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MainTab from './components/MainTab';
import BoostersTab from './components/BoostersTab';
import ReferralsTab from './components/ReferralsTab';
import Popup from './components/Popup';
import ThemeToggle from './components/ThemeToggle';
import styled from 'styled-components';
import { Home, Bolt, Group } from '@mui/icons-material';

const AppContainer = styled.div`
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
`;

const TabButtons = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: var(--card-background);
    border-radius: 15px;
    padding: 10px;
    margin-top: 20px;
`;

const TabButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
    color: var(--inactive-color);
    display: flex;
    flex-direction: column;
    align-items: center;

    &.active {
        color: var(--primary-color);
        transform: scale(1.2);
    }
`;

const App = () => {
    const [activeTab, setActiveTab] = useState('main');
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : '';
    }, [isDarkMode]);

    const handleShowPopup = (content) => {
        setPopupContent(content);
        setShowPopup(true);
    };

    return (
        <AppContainer>
            <GlobalStyle />
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            {activeTab === 'main' && <MainTab showPopup={handleShowPopup} />}
            {activeTab === 'boosters' && <BoostersTab showPopup={handleShowPopup} />}
            {activeTab === 'referrals' && <ReferralsTab />}
            <TabButtons>
                <TabButton
                    className={activeTab === 'main' ? 'active' : ''}
                    onClick={() => setActiveTab('main')}
                >
                    <Home />
                    Main
                </TabButton>
                <TabButton
                    className={activeTab === 'boosters' ? 'active' : ''}
                    onClick={() => setActiveTab('boosters')}
                >
                    <Bolt />
                    Boosters
                </TabButton>
                <TabButton
                    className={activeTab === 'referrals' ? 'active' : ''}
                    onClick={() => setActiveTab('referrals')}
                >
                    <Group />
                    Referrals
                </TabButton>
            </TabButtons>
            {showPopup && <Popup content={popupContent} onClose={() => setShowPopup(false)} />}
        </AppContainer>
    );
};

export default App;