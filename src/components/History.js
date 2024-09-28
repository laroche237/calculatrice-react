import React from 'react'
import './History.css'

function History({history}) {
  return (
    <div className='history'>
        <h2>History</h2>
        {history.lenght === 0 ? (<p>No calculation yet</p>):(<ul>
            {history.map((item, index) => (
               <li key={index}> 
               <span className="expression"> {item.expression}= </span> 
               <span className="result"> {item.result}</span>
               </li> 
            ))}
        </ul>)}
        </div>
  );
}
export default History;