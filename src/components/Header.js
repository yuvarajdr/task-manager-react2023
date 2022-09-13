import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const ButtonsHead = (props) => {
  const [name, setName] = useState([
    {
      text: "Hello 0",
      color: "green"
    },
    {
      text: "Hello 1",
      color: "blue"
    },
    {
      text: "Hello 2",
      color: "red"
    },
  ]);
  const [x, setX] = useState("true");
  const onClick0 = (e,ind) => {
    console.log('click 0')
    const newName = name.map((obj,index) => {
      if(index === ind){
        setX(obj.text)
        return {...obj, text:'Hello 00'};
      }
      return obj;
    });
    setName(newName);
  } 
  const onClick1 = (e,ind) => {
    console.log('click 1')
    const newName = name.map((obj,index) => {
      if(index === ind){
        setX(obj.text)
        return {...obj, text:'Hello 01'};
        
      }
      return obj;
    });
    setName(newName);
  } 
  const onClick2 = (e,ind) => {
    console.log('click 2')
    const newName = name.map((obj,index) => {
      if(index === ind){
        setX(obj.text)
        return {...obj, text:'Hello 02'};
        
      }
      return obj;
    });
    setName(newName);
  }
  const onClickbtn=(e,ind)=>{
    if(ind === 0){
      onClick0(e,ind)
    }
    else if(ind === 1){
      onClick1(e,ind)
    }
    else{
      onClick2(e,ind)
    }
  }
  // useEffect(()=>{
  //   setX(!x);
  // },[name]);
  return (
    <div>
      <header style={{display:"flex", flexDirection:"row"}}>
      <h1>{props.title}</h1>
      {
        name.map((btndetail,index) => {
          return(
          <button 
            key={index}
            onClick={e=>onClickbtn(e,index)}
            style={{backgroundColor: btndetail.color}}
            className='btn'
          >
              {btndetail.text}
          </button>
        )})
      }
  </header>
      <h1>Hello yuvaraj DR</h1>
      <h2>welcome to react</h2>
      <h3>Hello {x ? x : 'No x value'}</h3>
    </div>
  
)
}
// css in js
// const headingStyle = {
//     color: 'Blue',
//     backgroundColor: 'black',
// }

export default ButtonsHead