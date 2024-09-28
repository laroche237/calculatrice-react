import React from 'react'
import Button from './Button';
import './ButtonPanel.css'

 function ButtonPanel({onButtonClick}) {
    const buttons = [
        { label : '7',className:'number'},
        { label : '8',className:'number'},
        { label : '9',className:'number'},
        { label : '/',className:'operator'},
        { label : '4',className:'number'},
        { label : '5',className:'number'},
        { label : '6',className:'number'},
        { label : '*',className:'operator'},
        { label : '1',className:'number'},
        { label : '2',className:'number'},
        { label : '3',className:'number'},
        { label : '-',className:'operator'},
        { label : '.',className:'number'},
        { label : 'C',className:'clear'},
        { label : '+',className:'operator'},
        { label : '=',className:'equals'},
       
    ];
  return (
    <div className='button-panel'>
        {
            buttons.map((button) => (
                <Button
                key={button.label}
                label={button.label}
                onClick={onButtonClick}
                className={button.className}/>   
            ))
        }
    </div>
  );
}
export default ButtonPanel;