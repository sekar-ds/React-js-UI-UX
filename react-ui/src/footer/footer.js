import React from 'react'
import  '../footer/footer.css'

const footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <table className='footer-table'>
            <tr className='footer-tr'>
              <th>Position Index </th>
              <th>Plate Index</th>
              <th>Wafter Position</th>
              <th>Call</th>
              <th>X</th>
              <th>Y</th>
              <th>LLC X</th>
              <th>LLC Y</th>
              <th>Size X</th>
              <th>Size Y</th>
            </tr>
            <tr>
              
            <td className='gray2'></td>
            <td className='gray2'></td>
            <td className='gray2'></td>
            <td className='gray2'></td>
            <td className='gray2'></td>
            <td className='gray2'></td>
            <td className='gray2'></td>
            <td className='gray2'></td>
            <td className='gray2'></td>
            <td className='gray2'></td>
            </tr>

        </table>
      </div>
    </div>
  )
}

export default footer
