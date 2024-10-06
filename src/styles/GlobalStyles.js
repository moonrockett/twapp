import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #5865F2;
        --secondary-color: #7289DA;
        --text-color: #2E3338;
        --background-color: #FFFFFF;
        --card-background: #F6F6F6;
        --success-color: #43B581;
        --error-color: #F04747;
        --inactive-color: #99AAB5;
    }

    body.dark-mode {
        --primary-color: #7289DA;
        --secondary-color: #5865F2;
        --text-color: #FFFFFF;
        --background-color: #36393F;
        --card-background: #2F3136;
        --inactive-color: #72767D;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--background-color);
        color: var(--text-color);
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    #root {
        background-color: var(--background-color);
        color: var(--text-color);
        min-height: 100vh;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .card {
        background-color: var(--card-background);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    /* Add more styles as needed */
`;

export default GlobalStyle;