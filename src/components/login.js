import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: username,
                password: password
            });
            console.log(response.data);
            // Handle success (e.g., redirect to another page)
            // save token in local storage
            localStorage.setItem('token', response.data.token);
            // redirect to wallet page
            navigate('/wallet');
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full h-full mt-36">
            <h1 className="text-4xl font-bold text-center mb-10">Se connecter</h1>
                <form className="bg-white shadow-md rounded px-20 pt-20 pb-20 mb-4 mx-20">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Nom d'utilisateur
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Nom d'utilisateur"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleLogin}
                        >
                            Se connecter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;