import { create } from 'zustand';

interface MenuState {
    chooseId: string;
    setChooseId: (id: string) => void;
    activeId: string | null;
    setActiveId: (id: string) => void;
}

const initialChooseId = window.location.hash ? window.location.hash.substring(1) : 'home';

const useMenuStore = create<MenuState>((set) => ({
    chooseId: initialChooseId,
    setChooseId: (id: string) => set({ chooseId: id }),
    activeId: initialChooseId,
    setActiveId: (id: string) => set({ activeId: id }),
}));

export default useMenuStore;