import React from 'react';

import './Addtext.scss'

const Addtext = props => {

    
    
    const mousedown = event => { 

      const inputText = document.getElementById('inputText');
      let shiftX = event.clientX - inputText.getBoundingClientRect().left;
      let shiftY = event.clientY - inputText.getBoundingClientRect().top;

      inputText.style.position = 'absolute';
      inputText.style.zIndex = 1000;
      document.getElementById('textinputdiv').append(inputText);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY){
        inputText.style.left = pageX - shiftX + 'px';
        inputText.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        inputText.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        inputText.hidden = false;
        if (!elemBelow) return;

        
      }

      document.addEventListener('mousemove', onMouseMove);

      inputText.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        inputText.onmouseup = null;
      };

    };

    const ondragstart = () => {
      return false;
    };





return (
    <div id="textinputdiv">
    <input type="text" id="inputText" onMouseDown={mousedown}  onDragEnter={ondragstart} autoComplete="off" onChange={props.textchange}/>
   
    </div>
);


}

export default Addtext;