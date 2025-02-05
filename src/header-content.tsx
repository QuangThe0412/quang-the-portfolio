import { useEffect } from 'react';
import soundIconOff from './image/icons/sound-off.png';
import soundIconOn from './image/icons/sound-on.png';
import { useHeaderStore } from './store-header';

function HeaderContent() {
    const { sound, setSound, lang, setLang } = useHeaderStore();

    const soundIcon = sound ? soundIconOn : soundIconOff;

    const onClickSound = () => {
        setSound(!sound);
    }

    const onClickLang = () => {
        const newLang = lang === 'en' ? 'vi' : 'en';
        setLang(newLang);
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('lang', newLang);
        const newUrl = `${window.location.pathname}?${searchParams.toString()}${window.location.hash}`;
        window.history.replaceState(null, '', newUrl);
        window.location.reload();
    };

    return (
        <div className="fixed z-40 flex justify-between items-center p-5 bg-transparent w-full">
            <div className="text-2xl font-bold animate-text"></div>
            <div className="flex space-x-4">
                <div className="btn-header-style" onClick={onClickSound}>
                    <img src={soundIcon} alt="sound" />
                </div>
                <div className="btn-header-style" onClick={onClickLang}>
                    <span>{lang}</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;