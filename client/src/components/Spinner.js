import React from 'react'
import GridLoader from "react-spinners/GridLoader";
const Spinner = () => {
  return (
    <div className='d-flex spinner'>
      <GridLoader
  color="#36d7b7"
  cssOverride={{}}
  loading

  margin={2}
  speedMultiplier={1}
  width={10}
/>
    </div>
  )
}

export default Spinner
