import React from 'react'
import '../form/form.css'
import {fieldValidator,typeValidation,numberValidator,posxValidator
    ,posyValidator,sizexValidator,sizeyValidator} from '../components/validation'
import swal from 'sweetalert';



const Form = () => {

    

const [input,setInput] = React.useState({
  fieldName:"",
  type:"",
  number:"",
  posX:"",
  posY:"",
  sizeX:"",
  sizeY:""
});

const [errorMessage,setErrorMessage]= React.useState("");
const [successMessage,setsuccessMessage]=React.useState("")
const handleChange =(e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
}
const formSubmitter = (e)=>{
    e.preventDefault();
    setsuccessMessage('');
    setErrorMessage('')

    if(!fieldValidator(input.fieldName)) 
    return setErrorMessage('Please enter fieldname a-zA-z letter');

    if(!typeValidation(input.type)) 
    return setErrorMessage('Please enter Type a-zA-z letter');

    if(!numberValidator(input.number)) 
    return setErrorMessage('Please enter Number 0-9 number');

    if(!posxValidator(input.posX)) 
    return setErrorMessage('Please enter Pos-X a-zA-z letter');

    if(!posyValidator(input.posY)) 
    return setErrorMessage('Please enter Pos-Y a-zA-z letter');

    if(!sizexValidator(input.sizeX)) 
    return setErrorMessage('Please enter Size-X Number 0-9 number');

    if(!sizeyValidator(input.sizeY)) 
    return setErrorMessage('Please enter Size-Y Number 0-9 number ');

    swal({
        title: "Update success",
        text: setsuccessMessage('j'),
        icon: "success",
      });
      setsuccessMessage('success');
      
      
    
    }
    


    return (
        <div className='container'>
        
            <div className='forms'>
            
            <form className='form-input' >
            <h3>Field<span className='sec'>^</span></h3>
        <div className='container1'>
                <div className='input1'>
                {errorMessage.length > 0 && <div style={{ marginTop:'-13px',color:'red',fontSize:'12px',textAlign:'center',marginRight:"-90px"}}>{errorMessage}</div>}
                {successMessage.length > 0 && <div style={{ marginTop:'-10px',color:'green',fontSize:'12px',textAlign:'center',marginRight:"-90px"}}>{successMessage}</div>}

                <lable>Field Name</lable> <span>*</span>

                <input type="text"  name='fieldName' onChange={handleChange} required/> <br></br>

                </div> 

                <lable for="broeser">Type</lable> <span>*</span>
                <input type="text" name='type'onChange={handleChange} required/>

                <br></br>
                
              
               <div className='input1'> 
               <lable> Number </lable><span>*</span>
               <input type="text" name='number'onChange={handleChange} required/><br></br>  
                </div>

                <div className='input2'>
               <lable> Pos X </lable> <span>*</span>
               <input type="text" name='posX' onChange={handleChange} required/>  <br></br>
               </div>

                <div className='input3'>
                <lable>Pos Y </lable><span>*</span>
                <input type="text" name='posY'onChange={handleChange} required/>  <br></br>
                </div>

                <div className='input4'>
                <lable>Size X</lable>  <span>*</span> 
                <input type="text" name='sizeX' onChange={handleChange} required/> <br></br>
                </div>

                <div className='input5'>
               <lable>Size Y </lable> <span>*</span> 
               <input type="text" name='sizeY'onChange={handleChange} required/> <br></br>
               </div>
               </div>
                <div className='button-edit'>
                <button  className='delete' name="clear" >Delete</button>
        
                <button className='button1' >Add</button>
                <button onClick={formSubmitter} className="green">Update</button>
                
                </div>


                
            </form>
            <div className='color'></div> 
            
            </div>

        </div>
    )
}

export default Form
