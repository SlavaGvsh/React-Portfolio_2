import { FaPaperPlane } from "react-icons/fa6";

const ContactSectionForm = () => {
  return (
    <from className="form contact-form">
      <div className="first-row">
        <input placeholder="Name" type="text" />
      </div>
      <div className="second-row">
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
      </div>
      <div className="third-row">
        <textarea placeholder="Message"></textarea>
      </div>
      <button className="contant-btn inner-info-link" type="submit">
        Send Message
        <FaPaperPlane />
      </button>
    </from>
  );
};

export default ContactSectionForm;
