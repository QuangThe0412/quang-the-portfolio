import { TypeAnimation } from "react-type-animation";
import "../styles/home.css";
import { useHeaderStore } from "../store-header";
import soundOff from "../image/icons/sound-off.png";
import soundOn from "../image/icons/sound-on.png";
import { useRef } from "react";

function HomeContainer() {
  const { sound, setSound, lang } = useHeaderStore();
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const soundIcon = sound ? soundOn : soundOff;
  const text1 =
    lang === "en"
      ? "Hello! I am The Ngo Quang"
      : "Xin chào! Tôi là Ngô Quang Thế";

  const text2 =
    lang === "en"
      ? "Full-Stack Developer with 2+ years of experience in education and freelance projects."
      : "Lập trình viên Full-Stack với 2+ năm kinh nghiệm xây dựng giải pháp web đa nền tảng cho giáo dục và dự án tự do.";

  const text3 =
    lang === "en"
      ? "Nice to work with you"
      : "Rất mong được hợp tác cùng bạn! 😊";

  const handleClickSoundOverLay = () => {
    setSound(!sound);
    if (overlayRef.current) {
      overlayRef.current.style.display = "none";
    }
  };

  return (
    <div className="home-container">
      <div ref={overlayRef} className="home-overlay">
        <div className="sound-logo" onClick={handleClickSoundOverLay}>
          <img src={soundIcon} alt="sound" />
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-text">
        <TypeAnimation
          splitter={(str) => str.split(/(?= )/)}
          sequence={[text1, 2000, text2, 2000, text3, 2000]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="type-animation"
        />
      </div>
    </div>
  );
}

export default HomeContainer;
