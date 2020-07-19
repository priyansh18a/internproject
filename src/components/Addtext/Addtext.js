import React from 'react';

import './Addtext.scss'

const Addtext = props => {

    
    
    const mousedown = () => { 

      const inputText = document.getElementById('inputText');

      inputText.style.position = 'absolute';
      inputText.style.zIndex = 1;
      document.getElementById('textinputdiv').append(inputText);

      const previewwidth = 170 + parseFloat(0.62*window.innerWidth);
      function moveAt(pageX, pageY){
        if(pageX <= 170 ){
          inputText.style.left = 170 + 'px';
          inputText.style.top = pageY + 'px';
        }else if(pageY <= 70 ){
          inputText.style.left = pageX + 'px';
          inputText.style.top = 70 + 'px';
        }else if(pageY >= 660){
          inputText.style.left = pageX + 'px';
          inputText.style.top = 660 + 'px';
        }else if(pageX >= previewwidth  ){
          inputText.style.left = previewwidth + 'px';
          inputText.style.top = pageY + 'px';
        }
        else{
          inputText.style.left = pageX + 'px';
          inputText.style.top = pageY + 'px';
        }

      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      inputText.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        
      };

    };

    const ondragstart = () => {
      return false;
    };


  return (
    <div id="textinputdiv" >
      <input type="text" id="inputText" onMouseDown={mousedown} onDragStart={ondragstart}  autoComplete="off" onChange={props.textchange} placeholder="Write Your Text Here" onClick={event => event.preventDefault()}/>
    </div>
);


}

export default Addtext;