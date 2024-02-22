import { ProgressBar } from 'react-bootstrap';

function ProgressElement(props) {
  const { data} = props;
  return (<>
 
        <span className="mr-2" style={{color:`black`}}>{data.skill}</span>
        <ProgressBar now={data.percent} label={data.percent+`%`}/>

  </>
  );
}

export default ProgressElement;
