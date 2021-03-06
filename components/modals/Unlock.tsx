import React, { useState } from 'react';
import { GlobeIcon, QrcodeIcon, PencilAltIcon, KeyIcon } from '@heroicons/react/outline';
import WalletConnectLogin from './WalletConnectLogin';
import { loginServices } from '@elrondnetwork/dapp-core';
import LedgerLogin from './LedgerLogin';

const Unlock = () => {

    const callbackRoute = '/';
    const token = '';

    const [loginMethod, setLoginMethod] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);

    const onWalletConnectLogin = (loginMethod: string) => {
        setLoginMethod(loginMethod);
    }

    const onExtensionLogin = () => {
        onInitiateExtensionLogin();
    }

    const onWebWalletLogin = () => {
        onInitiateWelWalletLogin();
    }

    const onLedgerLogin = (loginMethod: string) => {
        setLoginMethod(loginMethod);
    }

    const handleOpenModal = () => {
        setShowLoginModal(true);
    }
    
    const handleCloseModal = () => {
        setShowLoginModal(false);
    }

    const methods = [
        {
            name: 'walletConnect',
            description: 'Maiar Application',
            icon: QrcodeIcon,
            action: onWalletConnectLogin,
            enabled: true
        },
        {
            name: 'extension',
            description: 'Wallet Extension',
            icon: GlobeIcon,
            action: onExtensionLogin,
            enabled: true
        },
        {
            name: 'ledger',
            description: 'Ledger',
            icon: KeyIcon,
            action: onLedgerLogin,
            enabled: false
        },
        {
            name: 'webWallet',
            description: 'Elrond Web Wallet',
            icon: PencilAltIcon,
            action: onWebWalletLogin,
            enabled: true
        }
    ];

    const [onInitiateExtensionLogin] = loginServices.useExtensionLogin({
        callbackRoute,
        token
    });

    const [onInitiateWelWalletLogin] = loginServices.useWebWalletLogin({
        callbackRoute,
        token
      });

    return (
        <>
            {
                loginMethod === '' && 
                (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {methods.filter(method => method.enabled).map((method) => (
                            <div
                                key={method.name}
                                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                onClick={() => method.action(method.name)}
                            >
                                <a href="#" className="focus:outline-none flex items-center">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    <method.icon className="h-8 w-8 mr-2 text-gray-700" aria-hidden="true" />
                                    <p className="text-base text-gray-700">{method.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                )
            }
            {
                loginMethod === 'walletConnect' &&
                (   
                    <WalletConnectLogin />
                ) 
            }
            {
                loginMethod === 'ledger' && 
                (   
                    <LedgerLogin />
                )
            }
        </>
    )
}

export default Unlock;