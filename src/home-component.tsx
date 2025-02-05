import { TypeAnimation } from 'react-type-animation'
import './home.css'
import { useHeaderStore } from './store-header';

function HomeComponent() {
    const lang = useHeaderStore((state) => state.lang);
    const text1 = lang === 'en'
        ? 'Hello! I am The Ngo Quang'
        : 'Xin chào! Tôi là Ngô Quang Thế';

    const text2 = lang === 'en'
        ? 'Full-Stack Developer with 2+ years of experience in education and freelance projects.'
        : 'Lập trình viên Full-Stack với 2+ năm kinh nghiệm xây dựng giải pháp web đa nền tảng cho giáo dục và dự án tự do.';

    const text3 = lang === 'en'
        ? 'Nice to work with you'
        : 'Rất mong được hợp tác cùng bạn! 😊';
    return (
        <>
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='home-text'>
                <TypeAnimation
                    splitter={(str) => str.split(/(?= )/)}
                    sequence={[text1, 2000, text2, 2000, text3, 2000]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className="type-animation"
                />
            </div>
        </>
    )
}

export default HomeComponent