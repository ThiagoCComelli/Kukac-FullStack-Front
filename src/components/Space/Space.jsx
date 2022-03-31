import React from 'react';
import "./Space.css"

const Space = ({header, goTo}) => {
  return (
    <div id={`${goTo}+`} className='mainSpace'>
      <div className="mainSpaceContent">
        <span><strong>#</strong>{header}</span>
      </div>
    </div>
  );
}

export default Space;
