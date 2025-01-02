import React from "react";
import { contactData } from "../../data/contactData";

const ContactSectionLeft = () => {
  return (
    <div className="contact-left">
      <h2>Let's discuss your project</h2>
      <ul className="contact-list">
        {contactData.map((item) => (
          <li key={item.id}>
            <h3>
              <item.icon />{item.title}
            </h3>
            <span>
              <a href={item.link}>{item.value}</a>
            </span>
          </li>
        ))}
        {/* <li>
          <h3>
            <i className="fa-solid fa-phone"></i> Phone
          </h3>
          <span>
            <a href="tel:001237779999">+00 123-777-9999</a>
          </span>
        </li> */}
      </ul>
    </div>
  );
};

export default ContactSectionLeft;
