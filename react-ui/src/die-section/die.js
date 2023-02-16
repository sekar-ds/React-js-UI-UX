import React from 'react'
import UseForm from '../useform/useform'
import '../die-section/die.css'

const die = () => {
  
    const { count,incrementCount,decrementCount,setValue}  = UseForm(); 
  return (
    <div className='top-container'>
      <div className='section'>
        <h2 className='header2'>Die</h2>

        <div className='aside'>
        <p>Total Position Index</p>

        <div className='countbutton'>
       <button onClick={decrementCount} className="dec">-</button>
        <span className='count1'>{count}</span>
        <button onClick={incrementCount} className="incr">+</button>
        </div>

        <button onClick={setValue} className="setvalue">Set</button>

        </div>  
      </div>

        <div className='button-edit'>
        <input type="button" className='edit' value="Save Die" />
        <input type="button" className='edit' value="Cancel"/>
        </div>
    </div>
  )
}

export default die
