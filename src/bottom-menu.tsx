import { FaHome, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";
import useMenuStore from "./store";

function BottomMenu() {
  const chooseId = useMenuStore((state) => state.chooseId);
  const setChooseId = useMenuStore((state) => state.setChooseId);
  const setActiveId = useMenuStore((state) => state.setActiveId);

  const handleMenuClick = (id: string) => {
    setChooseId(id);
    setActiveId(id);
  };

  return (
    <div className="block md:hidden fixed bottom-0 w-full bg-gray-800 text-white z-10">
      <div className="flex justify-around items-center py-2">
        <button
          className={`flex flex-col items-center ${
            chooseId === "home" ? "text-blue-400" : "text-white"
          }`}
          onClick={() => handleMenuClick("home")}
        >
          <FaHome size={20} />
          <span className="text-xs">Home</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            chooseId === "skill" ? "text-blue-400" : "text-white"
          }`}
          onClick={() => handleMenuClick("skill")}
        >
          <FaTools size={20} />
          <span className="text-xs">Skills</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            chooseId === "work-experience" ? "text-blue-400" : "text-white"
          }`}
          onClick={() => handleMenuClick("work-experience")}
        >
          <FaBriefcase size={20} />
          <span className="text-xs">Experience</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            chooseId === "contact" ? "text-blue-400" : "text-white"
          }`}
          onClick={() => handleMenuClick("contact")}
        >
          <FaEnvelope size={20} />
          <span className="text-xs">Contact</span>
        </button>
      </div>
    </div>
  );
}

export default BottomMenu;
