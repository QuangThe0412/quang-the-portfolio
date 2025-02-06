import React from 'react';
import { Chrono } from 'react-chrono';
import '../styles/work-ex.css';
import imgLeft from '../image/bg/solo2.png';
import { useHeaderStore } from '../store-header';

const WorkExContainer: React.FC = () => {
    const lang = useHeaderStore((state) => state.lang);
    const sub1 = lang === 'en' ? 'Tech Stack: .NET MVC, JavaScript, SQL' : 'Công Nghệ: .NET MVC, JavaScript, SQL';
    const sub2 = lang === 'en' ? 'Tech Stack: Node.js, Express.js, Java, React.js' : 'Công Nghệ: Node.js, Express.js, Java, React.js';
    const detail11 = lang === 'en' ? 'Delivered 15+ core features for web/mobile platforms, improving user engagement by 30%.'
        : 'Đã phát triển 15+ tính năng chính cho các nền tảng web / di động, cải thiện tương tác người dùng lên đến 30%.';
    const detail12 = lang === 'en' ? 'Collaborated with BAs to translate business requirements into technical solutions, reducing development ambiguity by 25%.'
        : 'Hợp tác với BAs để dịch yêu cầu kinh doanh thành giải pháp kỹ thuật, giảm mơ hồ trong quá trình phát triển 25%.';
    const detail13 = lang === 'en' ? 'Conducted biweekly feature demos for stakeholder feedback, ensuring alignment with project goals.'
        : 'Thực hiện biểu diễn tính năng hàng tuần để nhận phản hồi từ các bên liên quan, đảm bảo sự phù hợp với mục tiêu dự án.';
    const detail14 = lang === 'en' ? 'Maintained 98% code quality compliance via peer reviews and modular ownership.'
        : 'Duy trì 98% tuân thủ chất lượng mã thông qua xem xét đồng nghiệp và sở hữu mô-đun.';
    const detail21 = lang === 'en' ? 'Built scalable RESTful APIs for 3+ web apps, supporting 500+ concurrent users with below 500ms latency.'
        : 'Xây dựng các RESTful APIs có khả năng mở rộng cho 3+ ứng dụng web, hỗ trợ 500+ người dùng đồng thời với độ trễ dưới 500ms.';
    const detail22 = lang === 'en' ? 'Optimized server response time by 40% through code refactoring and caching strategies.'
        : 'Tối ưu hóa thời gian phản hồi của máy chủ 40% thông qua việc tái cấu trúc mã và chiến lược caching.';
    const detail23 = lang === 'en' ? 'Integrated frontend/backend systems for seamless user workflows, reducing client-reported bugs by 20%.'
        : 'Tích hợp hệ thống frontend / backend cho quy trình làm việc người dùng liền mạch, giảm lỗi được báo cáo từ khách hàng 20%.';

    const items = [
        {
            title: "08/2022 - 09/2024",
            cardTitle: "DAITRUONGPHAT SOLUTION (Education Sector) - Junior Full-Stack Developer",
            cardSubtitle: sub1,
            cardDetailedText: (
                <>
                    • {detail11}<br />
                    • {detail12}<br />
                    • {detail13}<br />
                    • {detail14}
                </>
            )
        },
        {
            title: "09/2024 - 12/2024",
            cardTitle: "Z-Network (Freelance Team) - Backend Developer ",
            cardSubtitle: sub2,
            cardDetailedText: (
                <>
                    • {detail21}<br />
                    • {detail22}<br />
                    • {detail23}
                </>
            )
        }
    ];

    return (
        <div className='work-ex-container'>
            <div className='wraper-img'>
                <img src={imgLeft} alt='work-ex' className='img-left' />
            </div>
            <div className='wraper-box'>
                <Chrono items={items} mode="VERTICAL" />
            </div>
        </div>
    );
}

export default WorkExContainer;