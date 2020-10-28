import React from 'react';
import './Contact.css';

const online = true;

function Contact() {
    return (
        <figure className="Contact">
            <img className="avatar"
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="contact"
            />
            <div className="status">
                <p className="name">Esther Wood</p>
                <div className={online ? 'status-online' : 'status-offline'}>
                    <div className="status-text">{online ? "Online" : 'Offline'}</div>
                </div>
            </div>
        </figure>
    );
}

export default Contact;