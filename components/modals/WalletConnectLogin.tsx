import QRCode from 'qrcode';
import { loginServices } from '@elrondnetwork/dapp-core';
import React, { useEffect, useState } from 'react';

const WalletConnectLogin = () => {

    const logoutRoute = '/';
    const callbackRoute = '/';
    const token = '';

    const [
        initLoginWithWalletConnect,
        { error },
        { uriDeepLink, walletConnectUri }
        ] = loginServices.useWalletConnectLogin({
        logoutRoute,
        callbackRoute,
        token,
        shouldLoginUser: true
    });

    const [qrCodeSvg, setQrCodeSvg] = useState<string>('');

    const generateQRCode = async () => {
        if (!walletConnectUri) {
            return;
        }

        const svg = await QRCode.toString(walletConnectUri, {
            type: 'svg'
        });

        setQrCodeSvg(svg);
    };

    useEffect(() => {
        generateQRCode();
    }, [walletConnectUri]);

    useEffect(() => {
        initLoginWithWalletConnect();
    }, []);

    return (
        <div className="flex justify-center flex-col items-center">
            <p className='text-2xl'>
                Maiar Login
            </p>
            <div
                className="m-3 w-48 h-48"
                dangerouslySetInnerHTML={{
                __html: qrCodeSvg
                }}
            />
            <p className="max-w-xxs text-center">
                Scan the QR code using your Maiar application
            </p>
        </div>
    )
}

export default WalletConnectLogin;