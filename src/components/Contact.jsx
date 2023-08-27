import React from "react";

const contactText = [
    {
        link: "https://open.kakao.com",
        title: "KAKAO : WITHSIRI91",
    },
    {
        link: "mailto:withsiri91@gmail.com",
        title: "MAIL : WITHSIRI91@gamil.com"
    },
];

const Contact = () => {
    return (
    <section id="contact">
        <div className="contact_inner">
            <h2 className="contact_title">contact</h2>
            <div className="contact_lines top" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="contact_text">
                <div className="text">
                    {contactText.map((contact, key) => (
                        <div key={key}>
                            <a href={contact.link} rel="noopener noreferrer" target="_blank">{contact.title}</a>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="contact_lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
  );
};

export default Contact;