import React, { useState} from 'react'
import './Footer.scss';

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

const gmailIcon = 'data:image/png;base64,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'
const phoneIcon = "data:image/png;base64,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"

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Feel free to reach out for anything</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={gmailIcon} alt="email" />
          <a href="mailto:bfrisbyh92@gmail.com" className="p-text">bfrisbyh92@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={phoneIcon} alt="phone" />
          <a href="tel:+1 (571) 291-5188" className="p-text">+1 (571) 291-5188</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
MotionWrap(Footer, 'app_footer'),
  'contact',
  'app__whitebg'
)