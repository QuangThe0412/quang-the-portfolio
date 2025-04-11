import React from "react";
import "../styles/contact-me.css";
import { TypeAnimation } from "react-type-animation";
import { useHeaderStore } from "../store-header";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";

// Schema xác thực với zod
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactContainer: React.FC = () => {
  const lang = useHeaderStore((state) => state.lang);
  const text1 = lang === "en" ? "Dont be shy!" : "Đừng ngần ngại!";
  const text2 = lang === "en" ? "Contact me." : "Liên hệ với tôi.";
  const textName = lang === "en" ? "Name:" : "Tên:";
  const textEmail = lang === "en" ? "Email:" : "Email:";
  const textMessage = lang === "en" ? "Message:" : "Tin nhắn:";
  const textSubmit = lang === "en" ? "Submit" : "Gửi";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const serviceId = "service_gy2407c";
      const templateId = "template_sak8hpx";
      const publicKey = "WLz3HfGYGdl3Q7OFP";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        publicKey
      );

      alert(
        lang === "en"
          ? "Message sent successfully!"
          : "Tin nhắn đã được gửi thành công!"
      );
      reset(); // Reset form sau khi gửi thành công
    } catch (error) {
      console.error("Failed to send message:", error);
      alert(
        lang === "en"
          ? "Failed to send message. Please try again."
          : "Gửi tin nhắn thất bại. Vui lòng thử lại."
      );
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <TypeAnimation
          sequence={[text1, 2000, text2, 2000]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="contact-title"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">{textName}</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">{textEmail}</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">{textMessage}</label>
            <textarea
              id="message"
              {...register("message")}
              className={errors.message ? "error" : ""}
            />
            {errors.message && (
              <p className="error-text">{errors.message.message}</p>
            )}
          </div>
          <button className="btn-submit" type="submit">
            {textSubmit}
          </button>
        </form>
      </div>
      <div className="footer">
        <p>Copyright@2025 Ngô Quang Thế</p>
        <div className="flex justify-center space-x-4">
          <div>📞 +84901465840</div>
          <div>✉ quangthe0412@gmail.com</div>
          <div>📍 HCMC</div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
