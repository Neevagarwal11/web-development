import React from 'react'

const button = ({title , activeClass , _callback}) => {
  return (
    <button className='{activeClass}' onClick={_callback}>
        {title}
    </button>
  )
}

export default button