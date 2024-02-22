import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


const Page5 = () => {
    return(
    
       <footer style={{ backgroundColor: '#282c34', padding: '20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='footersection1'>
          <h3>Get In Touch</h3>
          <p>📧emanhagag62@gmail.com</p>
          <p>📞01014053994</p>
        </div>

        <div>
          <button className='btn btn-light' style={{ padding: '10px', fontSize: '16px' ,marginTop:"40px"}}>Contact me</button>
        </div>

        <div>
          <FontAwesomeIcon icon={faFacebookF} style={{ padding: '10px',margin:"10px",color:'white' }}/>
          <FontAwesomeIcon icon={faGithub} style={{ padding: '10px',margin:"10px",color:'white' }}/>
          <FontAwesomeIcon icon={faTwitter} style={{ padding: '10px',margin:"10px",color:'white' }} />
        </div>
      </div>
    </footer>
    )
    
}

export default Page5;