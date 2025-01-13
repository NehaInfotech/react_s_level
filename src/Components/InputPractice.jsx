import React from 'react'

function InputPractice() {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [data,setData]=React.useState([])
    function SubmitEvent(){
        if()
    }
  return (
    <>
    <input type="text" value={name} />
    <input type="text" value={age}/>
    <button onClick={()=>SubmitEvent()} >submit</button>
    </>
  )
}

export default InputPractice