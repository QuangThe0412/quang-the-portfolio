import React, { useState, useEffect, useRef } from "react";
import './portfolio.css';
import CircleNav from "./circle-nav";

const navItems = ['section1', 'section2', 'section3'];

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState(navItems[0]);
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionsRef.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <CircleNav />
            <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll">
                {navItems.map((item, index) => (
                    <section
                        key={index}
                        id={item}
                        ref={el => sectionsRef.current[index] = el}
                        className="h-screen snap-start flex items-center justify-center bg-gray-200"
                    >
                        <h1 className="text-black">{item}</h1>
                    </section>
                ))}
            </div>
        </>
    );
};

export default Portfolio;