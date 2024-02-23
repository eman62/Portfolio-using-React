function SkillElement(props) {
  const { data } = props;
  return (
    <>
      {data.id % 2 ? (
        <div className="colored-div1" style={skillStyle}>
          {data.skill}
        </div>
      ) : (
        <div className="colored-div2" style={skillStyle}>
          {data.skill}
        </div>
      )}
    </>
  );
}

const skillStyle = {
  height: "300px",
  width: "300px",
  margin: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "1.5rem",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default SkillElement;