import soundIconOff from '../image/icons/sound-off.png';
import soundIconOn from '../image/icons/sound-on.png';
import { useHeaderStore } from '../store-header';
import rainSound from '../sound/yu.mp3';
import musicSound from '../sound/bgm.mp3';
import { useEffect, useRef } from 'react';
import useMenuStore from '../store';

function HeaderContainer() {
    const chooseId = useMenuStore((state) => state.chooseId);
    const { sound, setSound, lang, setLang } = useHeaderStore();

    const soundIcon = sound ? soundIconOn : soundIconOff;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioRef1 = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (sound) {
            if (chooseId === 'home' && audioRef.current) {
                audioRef.current.play();
                if (audioRef1.current) {
                    audioRef1.current.pause();
                }
            } else if (audioRef1.current) {
                audioRef1.current.play();
                if (audioRef.current) {
                    audioRef.current.pause();
                }
            }
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            if (audioRef1.current) {
                audioRef1.current.pause();
            }
        }
    }, [sound, chooseId]);

    const onClickSound = () => {
        setSound(!sound);
    };

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
            <audio ref={audioRef} src={rainSound} loop />
            <audio ref={audioRef1} src={musicSound} loop />
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

export default HeaderContainer;