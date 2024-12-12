import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wallet = () => {
    const [walletInfo, setWalletInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWalletInfo = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Token not found');
                return;
            }

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/wallet/', {
                    token: token
                });
                setWalletInfo(response.data.wallet);
            } catch (error) {
                setError('Failed to fetch wallet info');
                console.error(error);
            }
        };

        fetchWalletInfo();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!walletInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 bg-white shadow-md rounded">
            <h1 className="text-2xl font-bold mb-4">Wallet Info</h1>
            <p><strong>Nom:</strong> {walletInfo.nom}</p>
            <p><strong>Address:</strong> {walletInfo.address}</p>
            <p><strong>Private Key:</strong> {walletInfo.private_key}</p>
            <p><strong>Public Key:</strong> {walletInfo.public_key}</p>
        </div>
    );
};

export default Wallet;