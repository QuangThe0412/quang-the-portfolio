import bgBtn from './image/bg/bgm-bg.png';
import soundIconOff from './image/icons/sound-off.png';
import soundIconOn from './image/icons/sound-on.png';
import langEn from './image/icons/en-on.png';
import langVN from './image/icons/chinese-on.png';
import { useState } from 'react';

function HeaderContent() {
    const [sound, setSound] = useState(false);
    const [lang, setLang] = useState('en');
    const soundIcon = sound ? soundIconOn : soundIconOff;
    const langIcon = lang === 'en' ? langEn : langVN;

    const onClickSound = () => {
        setSound(!sound);
    }

    const onClickLang = () => {
        setLang(lang === 'en' ? 'vn' : 'en');
    }

    return (
        <div className="fixed z-40 flex justify-between items-center p-4 bg-transparent w-full">
            <div className="text-2xl font-bold animate-text">QT</div>
            <div className="flex space-x-4">
                <div className="btn-header-style" onClick={onClickSound}>
                    <img src={soundIcon} alt="sound" />
                </div>
                <div className="btn-header-style" onClick={onClickLang}>
                    <img src={langIcon} alt="lang" />
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;