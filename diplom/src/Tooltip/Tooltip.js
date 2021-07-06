import React from 'react';
import '../fonts/inter-3.13/inter-web/inter.css';
import '../Tooltip/Tooltip.css';

// import {useState} from 'react';

function Tooltip({tooltip}) {
  const isTooltipOpen = (
    `${tooltip ? '' : 'tooltip_invisible'}`
  )
  return (
    <div className={`tooltip ${isTooltipOpen}`}>
      <p className='tooltip__text'>Ничего не нашлось ¯\_(ツ)_/¯</p>
    </div>
  )
}

export default Tooltip