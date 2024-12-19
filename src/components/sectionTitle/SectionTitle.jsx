import "./sectionTitle.css"

const SectionTitle = ({ title, subTitle }) => {
  return (
    <>
      <h2 className="inner-title">{title}</h2>
      <h3 className="inner-second-title">{subTitle}</h3>
    </>
  );
};

export default SectionTitle;
