import { create } from 'zustand';

const getInitialLang = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryLang = searchParams.get('lang');
    return queryLang === 'vi' ? 'vi' : 'en';
};

interface AppState {
    sound: boolean;
    setSound: (sound: boolean) => void;
    lang: string;
    setLang: (lang: string) => void;
}

export const useHeaderStore = create<AppState>((set) => ({
    sound: false,
    setSound: (sound) => set({ sound }),
    lang: getInitialLang(),
    setLang: (lang) => set({ lang }),
}));