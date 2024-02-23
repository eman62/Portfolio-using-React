import React from 'react';

const Page2 = () => {
    return (
        <>
            <h1 style={pageTitleStyle}>Portfolio</h1>
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="container-page2" style={containerPageStyle}>
                            <h1 style={sectionTitleStyle}>About me</h1>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container-page2" style={containerPageStyle}>
                            <h4 style={sectionSubtitleStyle}>Highly motivated graduate with experience and education in computer science. Seeking a position as a Full Stack Developer, working alongside a professional team in a supportive atmosphere to develop skills and create software solutions that meet client objectives and contribute to company success.</h4>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="button-container btn btn-dark" style={buttonStyle}>
                        <a href="/Eman_CV.pdf" download="Eman_CV.pdf" style={linkStyle}>
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Page2;


const pageTitleStyle = {
    textAlign: "center",
    marginTop: "120px",
    marginBottom: "20px",
    fontSize: "2.5rem"
}

const containerStyle = {
    paddingTop: "20px",
    paddingBottom: "100px"
}

const containerPageStyle = {
    padding: "20px",
    marginBottom: "30px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9"
}

const sectionTitleStyle = {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "10px"
}

const sectionSubtitleStyle = {
    fontSize: "1rem",
    color: "#555"
}

const buttonStyle = {
    marginTop: "20px",
    marginBottom: "100px",
    fontSize: "1rem"
}

const linkStyle = {
    color: "white",
    textDecoration: "none"
}
