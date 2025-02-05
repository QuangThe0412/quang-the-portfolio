import React, { useState } from 'react';
import './contact-me.css';
import { TypeAnimation } from 'react-type-animation';
import { useHeaderStore } from './store-header';

const ContactComponent: React.FC = () => {
    const lang = useHeaderStore((state) => state.lang);
    const text1 = lang === 'en' ? 'Dont be shy!' : 'Đừng ngần ngại!';
    const text2 = lang === 'en' ? 'Contact me.' : 'Liên hệ với tôi.';
    const textName = lang === 'en' ? 'Name:' : 'Tên:';
    const textEmail = lang === 'en' ? 'Email:' : 'Email:';
    const textMessage = lang === 'en' ? 'Message:' : 'Tin nhắn:';
    const textSubmit = lang === 'en' ? 'Submit' : 'Gửi';


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý gửi form ở đây
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };


    return (
        <div className="contact-container">
            <div className="contact-form">
                <TypeAnimation
                    sequence={[
                        text1, 2000,
                        text2, 2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className="contact-title"
                />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">{textName}</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{textEmail}</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{textMessage}</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btn-submit' type="submit">{textSubmit}</button>
                </form>
            </div>
            <div className='footer'>
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

export default ContactComponent;