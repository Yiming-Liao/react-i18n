import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '../../i18n';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { langCode, restOfPath } = useLocale();

    return (
        <header className='fixed w-full h-36 bg-neutral-200 flex flex-col'>
            <div className='w-full h-2/3 flex justify-evenly border-b-2 border-black'>
                <button onClick={() => navigate(`/${langCode}`)}>🏠Home</button>
                <button onClick={() => navigate(`/${langCode}/about`)}>📃About</button>
                <button onClick={() => navigate(`/en/${restOfPath}`)}>English</button>
                <button onClick={() => navigate(`/zh/${restOfPath}`)}>中文</button>
            </div>
            <div className='h-1/3 flex justify-evenly items-center'>
                <p>當前語言碼: {langCode}</p>
                <p>語言碼後面的網址: {restOfPath}</p>
            </div>
        </header>
    );
};

export default Navbar;
