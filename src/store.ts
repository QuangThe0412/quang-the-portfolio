import { create } from 'zustand';

interface MenuState {
    chooseId: string;
    setChooseId: (id: string) => void;
}

const initialChooseId = window.location.hash ? window.location.hash.substring(1) : 'home';

const useMenuStore = create<MenuState>((set) => ({
    chooseId: initialChooseId,
    setChooseId: (id: string) => set({ chooseId: id }),
}));

export default useMenuStore;