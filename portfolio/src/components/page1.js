import React from 'react';

const Page1 = () => {
    return(
        <div>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}><a href="#" style={linkStyle}>Home</a></li>
                    <li style={liStyle}><a href="#" style={linkStyle}>About</a></li>
                    <li style={liStyle}><a href="#" style={linkStyle}>Contact</a></li>
                </ul>
            </nav>
            <div className="img" style={imgStyle}>
                <h1 style={h1Style}>Eman Abdelshafi</h1>
                <h4 style={h4Style}>Mean Stack Developer</h4>
                <br/>
                <button className="btn btn-success" style={buttonStyle}>Contact Me</button>
            </div>
        </div>
    )
}

export default Page1;


const navStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px'
}

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center'
}

const liStyle = {
    float: 'left'
}

const linkStyle = {
    display: 'block',
    color: '#fff',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none'
}

const imgStyle = {
    height: 'calc(100vh - 50px)',
    background: 'url("https://cdn.pixabay.com/photo/2018/09/17/13/06/marble-3683820_960_720.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

const h1Style = {
    fontSize: '3rem',
    marginBottom: '0'
}

const h4Style = {
    fontSize: '1.5rem',
    marginTop: '0'
}

const buttonStyle = {
    fontSize: '1rem'
}
