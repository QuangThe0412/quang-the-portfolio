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
        titleEn: 'Skill',
        titleVn: 'Kỹ Năng',
        id: 'skill',
        container: <SkillComponent />,
    },
    {
        titleEn: 'Work Experience',
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
    return (
        <>
            <HeaderContent />
            <div className="relative h-screen w-screen">
                <LeftMenu />
                <ContentBox />
            </div>
        </>
    );
};

export default Portfolio;