import React from "react";
import { Chrono } from "react-chrono";
import "../styles/work-ex.css";
import imgLeft from "../image/bg/solo2.png";
import { useHeaderStore } from "../store-header";

const WorkExContainer: React.FC = () => {
  const lang = useHeaderStore((state) => state.lang);

  const items = [
    {
      title: "08/2022 - 09/2024",
      cardTitle:
        "DAITRUONGPHAT SOLUTION (Education Sector) - Junior Full-Stack Developer",
      cardSubtitle:
        lang === "en"
          ? "Tech Stack: .NET MVC, JavaScript, React.js, MS SQL"
          : "Công Nghệ: .NET MVC, JavaScript, React.js, MS SQL",
      cardDetailedText: (
        <>
          •{" "}
          {lang === "en"
            ? "Delivered 15+ core features for web/mobile platforms, improving user engagement by 30%."
            : "Đã phát triển 15+ tính năng chính cho các nền tảng web / di động, cải thiện tương tác người dùng lên đến 30%."}
          <br />•{" "}
          {lang === "en"
            ? "Collaborated with BAs to translate business requirements into technical solutions, reducing development ambiguity by 25%."
            : "Hợp tác với BAs để dịch yêu cầu kinh doanh thành giải pháp kỹ thuật, giảm mơ hồ trong quá trình phát triển 25%."}
          <br />•{" "}
          {lang === "en"
            ? "Conducted biweekly feature demos for stakeholder feedback, ensuring alignment with project goals."
            : "Thực hiện biểu diễn tính năng hàng tuần để nhận phản hồi từ các bên liên quan, đảm bảo sự phù hợp với mục tiêu dự án."}
          <br />•{" "}
          {lang === "en"
            ? "Maintained 98% code quality compliance via peer reviews and modular ownership."
            : "Duy trì 98% tuân thủ chất lượng mã thông qua xem xét đồng nghiệp và sở hữu mô-đun."}
        </>
      ),
    },
    {
      title: "03/2023 - Present",
      cardTitle:
        "FREELANCER (Construction Materials Store Project) - Full-Stack Developer",
      cardSubtitle:
        lang === "en"
          ? "Tech Stack: JavaScript, React.js, MS SQL, Node.js"
          : "Công Nghệ: JavaScript, React.js, MS SQL, Node.js",
      cardDetailedText: (
        <>
          •{" "}
          {lang === "en"
            ? "Served as the Full Stack Developer for the FreelanceR project, responsible for the comprehensive development of the system from user interface to server-side data processing."
            : "Đóng vai trò là Full Stack Developer cho dự án FreelanceR, chịu trách nhiệm phát triển toàn diện hệ thống từ giao diện người dùng đến xử lý dữ liệu phía máy chủ."}
          <br />•{" "}
          {lang === "en"
            ? "Developed product management, shopping cart, and order management features, optimizing the sales process and customer experience."
            : "Phát triển các tính năng quản lý sản phẩm, giỏ hàng và quản lý đơn hàng, tối ưu hóa quy trình bán hàng và trải nghiệm khách hàng."}
          <br />•{" "}
          {lang === "en"
            ? "Optimized website performance, reducing page load time by 30% and improving user experience."
            : "Tối ưu hóa hiệu suất trang web, giảm thời gian tải trang 30% và cải thiện trải nghiệm người dùng."}
          <br />•{" "}
          {lang === "en"
            ? "Built an inventory management system, reducing inventory errors by 20%."
            : "Xây dựng hệ thống quản lý hàng tồn kho, giảm lỗi hàng tồn kho 20%."}
        </>
      ),
    },
    {
      title: "03/2024 - 09/2024",
      cardTitle: "Z-NETWORK (Freelance Team) - Backend Developer",
      cardSubtitle:
        lang === "en"
          ? "Tech Stack: Node.js, Express.js, Java, React.js"
          : "Công Nghệ: Node.js, Express.js, Java, React.js",
      cardDetailedText: (
        <>
          •{" "}
          {lang === "en"
            ? "Built scalable RESTful APIs for 3+ web apps, supporting 500+ concurrent users with <500ms latency."
            : "Xây dựng các RESTful APIs có khả năng mở rộng cho 3+ ứng dụng web, hỗ trợ 500+ người dùng đồng thời với độ trễ dưới 500ms."}
          <br />•{" "}
          {lang === "en"
            ? "Optimized server response time by 40% through code refactoring and caching strategies."
            : "Tối ưu hóa thời gian phản hồi của máy chủ 40% thông qua việc tái cấu trúc mã và chiến lược caching."}
          <br />•{" "}
          {lang === "en"
            ? "Integrated frontend/backend systems for seamless user workflows, reducing client-reported bugs by 20%."
            : "Tích hợp hệ thống frontend / backend cho quy trình làm việc người dùng liền mạch, giảm lỗi được báo cáo từ khách hàng 20%."}
        </>
      ),
    },
    {
      title: "10/2024 - Present",
      cardTitle: "FREELANCER - Full-Stack Developer",
      cardSubtitle:
        lang === "en"
          ? "Tech Stack: Java, React.js, MySQL"
          : "Công Nghệ: Java, React.js, MySQL",
      cardDetailedText: (
        <>
          •{" "}
          {lang === "en"
            ? "Full-stack development of a private pharmacy e-commerce application. System architecture design and implementation for scalability."
            : "Phát triển full-stack ứng dụng thương mại điện tử nhà thuốc tư nhân. Thiết kế và triển khai kiến trúc hệ thống để mở rộng."}
          <br />•{" "}
          {lang === "en"
            ? "Database and performance optimization for faster data retrieval."
            : "Tối ưu hóa cơ sở dữ liệu và hiệu suất để truy xuất dữ liệu nhanh hơn."}
          <br />•{" "}
          {lang === "en"
            ? "RESTful API development for front-end/back-end communication."
            : "Phát triển RESTful API để giao tiếp giữa front-end và back-end."}
          <br />•{" "}
          {lang === "en"
            ? "Spring Boot utilization for efficient back-end development."
            : "Sử dụng Spring Boot để phát triển back-end hiệu quả."}
          <br />•{" "}
          {lang === "en"
            ? "Git version control and Agile/Scrum participation."
            : "Sử dụng Git để kiểm soát phiên bản và tham gia Agile/Scrum."}
        </>
      ),
    },
  ];

  return (
    <div className="work-ex-container">
      <div className="wraper-img">
        <img src={imgLeft} alt="work-ex" className="img-left" />
      </div>
      <div className="wraper-box">
        <Chrono items={items} mode="VERTICAL" />
      </div>
    </div>
  );
};

export default WorkExContainer;
