import React, { useState, useEffect, useRef } from 'react';
import './left-menu.css';
import useMenuStore from './store';
import { MenuItems } from './portfolio';

function LeftMenu() {
    const initialChooseId = window.location.hash ? window.location.hash.substring(1) : 'home';
    const [activeId, setActiveId] = useState<string | null>(initialChooseId);
    const chooseId = useMenuStore((state) => state.chooseId);
    const setChooseId = useMenuStore((state) => state.setChooseId);
    const lineRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (id: string) => {
        setActiveId(id);
    };

    const handleMouseLeave = () => {
        setActiveId(chooseId);
    };

    const handleOnClick = (id: string) => {
        setChooseId(id);
    };

    useEffect(() => {
        if (lineRef.current && activeId !== null) {
            const activeItem = document.querySelector(`[data-pos="${activeId}"]`);
            if (activeItem) {
                const rect = activeItem.getBoundingClientRect();
                const top = rect.top - 390;
                lineRef.current.style.top = `${top}px`;
            }
        }
    }, [activeId]);

    return (
        <div className="leftbox needLangclassName zh" data-init="1">
            <div className="con">
                <div className="sideNav">
                    <div className="navlist">
                        {MenuItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`nav-st ${chooseId === item.id ? 'on' : ''}`}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleOnClick(item.id)}
                            >
                                <a href={`#${item.id}`} data-pos={item.id} className="txt" data-lang={index}>
                                    {item.titleEn}
                                </a>
                            </div>
                        ))}
                        <div className="line" ref={lineRef}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftMenu;