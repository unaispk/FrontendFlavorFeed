import React from 'react'
import './ExploreAll.css'

const ExploreAll = () => {
  return (
    
    <div className=''>
        <button style={{ color: '#7808d0' }} className="button" href="#">
  <span className="button__icon-wrapper">
    <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
      <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
    </svg>

    <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
      <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
    </svg>
  </span>
  <span className='text-white'>Explore All</span>
</button>

      
    </div>
  )
}

export default ExploreAll
