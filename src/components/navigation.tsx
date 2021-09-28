import React from 'react';
import appLogo from '../images/logo.png';
import Image from 'next/image';

const Navigation = ({children}) => {
    return (
        <div className="bg-primary">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-2">
                <div className="w-32">
                    <Image src={appLogo} alt="Logo" />
                </div>
                <div>{children}</div>
                <div>hi there</div>
            </div>
        </div>
    )
}

export default Navigation;