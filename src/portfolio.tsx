import React, { Component, useEffect } from "react";
import './portfolio.css';
import LeftMenu from "./left-menu";
import ContentBox from "./content-box";
import HeaderContent from "./header-content";
import HomeComponent from "./home-component";
import SkillComponent from "./skill-component";
import WorkExComponent from "./work-ex-component";
import EduComponent from "./edu-component";
import ContactComponent from "./contact-component";
import useMenuStore from "./store";

interface Item {
    titleEn: string;
    titleVn: string;
    id: string;
    container?: JSX.Element;
}

export const MenuItems: Item[] = [
    {
        titleEn: 'Home',
        titleVn: 'Trang Chủ',
        id: 'home',
        container: <HomeComponent />,
    },
    {
        titleEn: ' TECHNICAL SKILLS',
        titleVn: 'Kỹ Năng',
        id: 'skill',
        container: <SkillComponent />,
    },
    {
        titleEn: 'PROFESSIONAL EXPERIENCE',
        titleVn: 'Kinh Nghiệm Làm Việc',
        id: 'work-experience',
        container: <WorkExComponent />,
    },
    {
        titleEn: 'Education',
        titleVn: 'Học Vấn',
        id: 'education',
        container: <EduComponent />,
    },
    {
        titleEn: 'Contact Me',
        titleVn: 'Liên Hệ',
        id: 'contact',
        container: <ContactComponent />,
    },
];

const Portfolio = () => {
    const chooseId = useMenuStore((state) => state.chooseId);
    const setChooseId = useMenuStore((state) => state.setChooseId);
    const setActiveId = useMenuStore((state) => state.setActiveId);

    const handleScroll = (e: any) => {
        const isDown = e.deltaY > 0;
        const currentIndex = MenuItems.findIndex((item) => item.id === chooseId);
        if (isDown) {
            if (currentIndex < MenuItems.length - 1) {
                const currentId = MenuItems[currentIndex + 1].id;
                setChooseId(currentId);
                setActiveId(currentId);
            }
        } else {
            if (currentIndex > 0) {
                const currentId = MenuItems[currentIndex - 1].id;
                setChooseId(currentId);
                setActiveId(currentId);
            }
        }
    }

    return (
        <div className="h-screen w-screen">
            <HeaderContent />
            <div className="relative h-full w-full overflow-y-scroll" onWheel={(e) => handleScroll(e)}>
                <LeftMenu />
                <ContentBox />
            </div>
        </div>
    );
};

export default Portfolio;