import React from 'react'
import Loader from "react-js-loader";

const Preloader = () => {
  return (
    <div style={{ 
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#fff',
        display : 'grid',
        placeItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000
    }}>
        <Loader type="spinner-default" bgColor={"#0000ff"} color={'#0000FF'} size={70} />
    </div>
  )
}

export default Preloader