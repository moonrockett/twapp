import React, { useState, useEffect } from 'react';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const AdminPanel = () => {
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        // Fetch codes from backend
        fetchCodes();
    }, []);

    const fetchCodes = async () => {
        // Simulating API call
        const newCodes = Array(10).fill().map(() => generateRandomCode());
        setCodes(newCodes);
    };

    const generateRandomCode = () => {
        return Math.random().toString(36).substring(2, 7).toUpperCase();
    };

    const markCodeAsUsed = (code) => {
        // Send request to backend to mark code as used
        setCodes(prevCodes => prevCodes.filter(c => c !== code));
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Admin Panel</Typography>
            <Button variant="contained" color="primary" onClick={fetchCodes}>
                Generate New Codes
            </Button>
            <List>
                {codes.map((code, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={code} />
                        <Button onClick={() => markCodeAsUsed(code)}>Mark as Used</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default AdminPanel;