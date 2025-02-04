import { TypeAnimation } from 'react-type-animation'
import './home.css'

function HomeComponent() {
    return (
        <>
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='home-text'>
                <TypeAnimation
                    splitter={(str) => str.split(/(?= )/)}
                    sequence={[
                        'Chào! Tôi là Ngô Quang Thế', 2000,
                        'Full-Stack Developer với 2+ năm kinh nghiệm trong lĩnh vực giáo dục và các dự án freelance.', 3000,
                        'Rất hân hạnh được làm việc cùng bạn!', 2000
                    ]}
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