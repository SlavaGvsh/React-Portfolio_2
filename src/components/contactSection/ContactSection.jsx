import SectionTitle from "../sectionTitle/SectionTitle";
import ContactSectionLeft from "./ContactSectionLeft";
import ContactSectionRight from "./ContactSectionRight"; 
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container flex-center">
      <SectionTitle title="Contact Me" subTitle="Contact Me"/>
        {/* <h2 className="inner-title">Contact Me</h2>
        <h3 className="inner-second-title">Contact Me</h3> */}
        <div className="contact-wrapper">
        <ContactSectionLeft />
         <ContactSectionRight />
         
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
