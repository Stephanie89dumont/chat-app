import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

// Quete 2.2
function Contact(props) {
    return (
        <figure className="Contact">
            <img className="avatar" src={props.img} alt={props.name} />

            <div className="status">
                <p className="name">{props.name}</p>
                <div
                    className={props.online ? "status-online" : "status-offline"}
                ></div>
                <div className="status-text">{props.online ? "Online" : "Offline"}</div>
            </div>
        </figure>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    online: PropTypes.bool.isRequired
};

export default Contact;

// Quete 2.1
// const online = true;

// function Contact() {
//     return (
//         <figure className="Contact">
//             <img
//                 className="avatar"
//                 src="https://randomuser.me/api/portraits/women/32.jpg"
//                 alt="contact"
//             />
//             <div className="status">
//                 <p className="name">Esther Wood</p>
//                 <div className={online ? "status-online" : "status-offline"}></div>
//                 <div className="status-text">{online ? "Online" : "Offline"}</div>
//             </div>
//         </figure>
//     );
// }




