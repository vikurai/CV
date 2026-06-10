import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ewlii1a';
const TEMPLATE_ID = 'template_wmwlj0f';
const PUBLIC_KEY = 'yz7JX2z5Nb1-dYqBl';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const sendEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const hasNameErr = name === '';
    const hasEmailErr = email === '';
    const hasMsgErr = message === '';
    setNameError(hasNameErr);
    setEmailError(hasEmailErr);
    setMessageError(hasMsgErr);
    if (hasNameErr || hasEmailErr || hasMsgErr) return;

    setLoading(true);
    setSuccess(false);
    setFailed(false);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email, message }, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => setFailed(true))
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <form className="contact-form" noValidate>
            <div className="form-row">
              <div className={`form-field ${nameError ? 'has-error' : ''}`}>
                <label htmlFor="inp-name">Your name *</label>
                <input
                  id="inp-name"
                  type="text"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setNameError(false); }}
                />
                {nameError && <span className="error-text">Please enter your name</span>}
              </div>

              <div className={`form-field ${emailError ? 'has-error' : ''}`}>
                <label htmlFor="inp-email">Email / phone *</label>
                <input
                  id="inp-email"
                  type="text"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                />
                {emailError && <span className="error-text">Please enter your email or phone</span>}
              </div>
            </div>

            <div className={`form-field ${messageError ? 'has-error' : ''}`}>
              <label htmlFor="inp-msg">Message *</label>
              <textarea
                id="inp-msg"
                placeholder="Send me any inquiries or questions"
                rows={10}
                value={message}
                onChange={(e) => { setMessage(e.target.value); setMessageError(false); }}
              />
              {messageError && <span className="error-text">Please enter the message</span>}
            </div>

            <div className="form-bottom">
              {success && <span className="status-text success">✅ Message sent! I'll get back to you soon.</span>}
              {failed && <span className="status-text failed">❌ Something went wrong. Please try again.</span>}
              <button onClick={sendEmail} disabled={loading}>
                {loading ? 'Sending...' : 'Send'} →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;