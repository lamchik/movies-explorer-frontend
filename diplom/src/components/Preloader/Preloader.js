import React from 'react'
import './Preloader.css'

function Preloader({preloader}) {
  const isPreloaderActive = (
    `${preloader ? '' : 'preloader_invisible'}`
  )

  return (
    <div className={`preloader ${isPreloaderActive}`}>
      <div className="preloader__container">
        <span className="preloader__round"/>
      </div>
    </div>
  );
}

export default Preloader
