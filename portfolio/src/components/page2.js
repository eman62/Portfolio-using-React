
const Page2 = () => {
    return(<>
  <h1 style={{textAlign:"center",marginTop:"120px",marginBottom:"20px"}}>Portfolio</h1>  
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <div class="container-page2">
        <h1 >About me</h1>
      </div>
    </div>
    <div class="col-md-6">
      <div class="container-page2">
        <h4>Highly motivated graduate with experience and education in computer science, Seeking for a position as a Full stack developer and Working alongside a professional team in a good atmosphere that helps me to develop my skills by producing a whole software plan And application that meets all the customer's objectives and contribute to company success.</h4>
      </div>
    </div>
  </div>
  <div className="text-center">
        <button className="button-container btn btn-dark" style={{marginBottom:"100px",marginTop:"20px"}}> <a style={{color:"white",textDecoration:"none"}}
          href="/Eman_CV.pdf"download="Eman_CV.pdf" className="black-button" >
          Download Resume
        </a>
      </button>
      </div>
</div>
</>
    )
    
}

export default Page2;