function SkillElement(props) {
  const { data} = props;
  return (<>
        {data.id % 2 ? (
           <div className="colored-div1 " style={{ height: '300px', width: '300px', margin: '15px', display: 'inline-block',textAlign:'center',lineHeight: '300px' }}> {data.skill} </div>
        ) : (
          <div className="colored-div2 " style={{ height: '300px', width: '300px', margin: '15px', display: 'inline-block',textAlign:'center',lineHeight: '300px' }}> {data.skill} </div>
        )}
  </>
  );
}

export default SkillElement;