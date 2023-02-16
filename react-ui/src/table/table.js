import React from 'react'
import '../table/table.css'

const table = () => {
  return (
    <div className='top-table' >
       <div className='tables'>
       <h3>Product</h3>
       <div className='scroll' >
            <table className='table-container' >
                <tr>
                    <th className='header1'>ID</th>
                    <th className='header1' id="the-header">Product</th>
                </tr>
                <tr>
                    <td className='gray'></td>
                    <td className='gray'></td>
                </tr>
                <tr>
                    <td>711</td>
                    <td> 200mm Bare Si</td>
                </tr>
                <tr>
                    <td>285</td>
                    <td>200mm Glass_TCO deposit</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>401AZ</td>
                </tr>
                <tr >
                    <td>6</td>
                    <td>800AZ TEOS</td>
                </tr>
               
              
                
                
                
               
                
                
                </table>
            </div>
            </div>
    
    <div>

       <div className='tables1'>
       <h3>Field</h3>
       <div className='scroll1'>
            <table className='table-container1 ' id="container2">
                <tr className='the-header1'>
                    <th className='the-heder'>Field Name</th>
                    <div className='over-edit'>
                    <th className='th1'>Type</th>
                    <th className='th1'>Number</th>
                    <th className='th1'>Pos x</th>
                    <th className='th1'>Pos Y</th>
                    <th className='th1'>Size X</th>
                    </div>
                </tr>
               <tr>
                <td className='gray1'></td>
                <td className='gray1'></td>
                <td className='gray1'></td>
                <td className='gray1'></td>
                <td className='gray1'></td>
                <td className='gray1'></td>
               </tr>
                
              
                </table>
                </div>
                </div>

        
    </div>
    </div>
  )
}

export default table
