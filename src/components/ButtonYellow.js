import React from 'react'

const ButtonYellow = ({label,extrastyle}) => {
  return (
       <div className={` ${extrastyle}`}>
            <a href="index.html">
            <div className="py-2 px-5 bg-yellow-400 text-sm">
                <p className="text-white text-center">{label}</p>
            </div>
           </a>
        </div>
  )
}

export default ButtonYellow
