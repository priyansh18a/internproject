import React from 'react';

import './Addtext.scss'

const Addtext = props => {

    
    
    const mousedown = event => { 

      const inputText = document.getElementById('inputText');

      inputText.style.position = 'absolute';
      inputText.style.zIndex = 1;
      document.getElementById('textinputdiv').append(inputText);

      function moveAt(pageX, pageY){
        inputText.style.left = pageX + 'px';
        inputText.style.top = pageY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      inputText.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        inputText.onmouseup = null;
      };

    };


    const mouseup = () => {   
      console.log('it works')
      const inputText = document.getElementById('inputText');
      function moveAt(pageX, pageY){
        inputText.style.left = pageX + 'px';
        inputText.style.top = pageY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.removeEventListener('mousemove', onMouseMove);
      inputText.onmouseup = null;
    }

    const ondragstart = () => {
      return false;
    };


 


return (
    <div id="textinputdiv" onMouseUp={mouseup} >
    <input type="text" id="inputText" onMouseDown={mousedown}  onDragEnter={ondragstart} autoComplete="off" onChange={props.textchange} placeholder="Write Your Text Here"/>
   
    </div>
);


}

export default Addtext;