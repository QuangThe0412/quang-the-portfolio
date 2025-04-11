import "./styles/portfolio.css";
import LeftMenu from "./left-menu";
import ContentBox from "./content-box";
import HeaderContainer from "./container/header-container";
import HomeContainer from "./container/home-container";
import SkillContainer from "./container/skill-container";
import WorkExContainer from "./container/work-ex-container";
import ContactContainer from "./container/contact-container";
import useMenuStore from "./store";
import BottomMenu from "./bottom-menu";

interface Item {
  titleEn: string;
  titleVn: string;
  id: string;
  container?: JSX.Element;
}

export const MenuItems: Item[] = [
  {
    titleEn: "Home",
    titleVn: "Trang Chủ",
    id: "home",
    container: <HomeContainer />,
  },
  {
    titleEn: "SKILLS",
    titleVn: "Kỹ Năng",
    id: "skill",
    container: <SkillContainer />,
  },
  {
    titleEn: "EXPERIENCE",
    titleVn: "Kinh Nghiệm",
    id: "work-experience",
    container: <WorkExContainer />,
  },
  {
    titleEn: "Contact Me",
    titleVn: "Liên Hệ",
    id: "contact",
    container: <ContactContainer />,
  },
];

const Portfolio = () => {
  const chooseId = useMenuStore((state) => state.chooseId);
  const setChooseId = useMenuStore((state) => state.setChooseId);
  const setActiveId = useMenuStore((state) => state.setActiveId);

  const handleScroll = (e: WheelEvent) => {
    const home: any = document.querySelector(".home-overlay");
    if (home && home.style.display !== "none") {
      return;
    }

    if (e.deltaY > 0) {
      handleDown();
    } else {
      handleUp();
    }
  };

  const handleDown = () => {
    const currentIndex = MenuItems.findIndex((item) => item.id === chooseId);
    if (currentIndex < MenuItems.length - 1) {
      const currentId = MenuItems[currentIndex + 1].id;
      setChooseId(currentId);
      setActiveId(currentId);
    }
  };

  const handleUp = () => {
    const currentIndex = MenuItems.findIndex((item) => item.id === chooseId);
    if (currentIndex > 0) {
      const currentId = MenuItems[currentIndex - 1].id;
      setChooseId(currentId);
      setActiveId(currentId);
    }
  };

  return (
    <div className="h-screen w-screen container-wapper">
      <HeaderContainer />
      <div
        className="relative h-full w-full overflow-y-scroll"
        onWheel={(e) => handleScroll(e as unknown as WheelEvent)}
      >
        <ContentBox />
      </div>
      <BottomMenu />
      <div className="hidden md:block">
        <LeftMenu />
      </div>
    </div>
  );
};

export default Portfolio;
