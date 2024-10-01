import { useEffect, useState } from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { TodoProvider } from './Context/TodoContext';

const CLIENT_ID = '3d54c01d2ee3455caf43fad4b846dcf6';
const CLIENT_SECRECT = '873c7e341f534ee68e9d86a6c1cd46d0';

function App() {
    const [accessToken, setAccessToken] = useState('');

    useEffect(
        // API access token
        () => {
            var authParameters = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body:
                    'grant_type=client_credentials&client_id=' +
                    CLIENT_ID +
                    '&client_secret=' +
                    CLIENT_SECRECT,
            };

            fetch('https://accounts.spotify.com/api/token', authParameters)
                .then((result) => result.json())
                .then((data) => {
                    setAccessToken(data.access_token);
                });
        },
        []
    );

    return (
        <>
            <TodoProvider>
                <AppUI accessToken={accessToken} />
            </TodoProvider>
        </>
    );
}

export default App;
