import React, { useState } from 'react';
import './contact-me.css';
import { TypeAnimation } from 'react-type-animation';

const ContactComponent: React.FC = () => {
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
                        'Dont be shy!', 2000,
                        'Contact me.', 2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className="contact-title"
                />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btn-submit' type="submit">Submit</button>
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