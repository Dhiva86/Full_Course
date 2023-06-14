import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../Reducers/themeReducer'

const Theme = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    function setLightTheme(){
        const themeData= {
            color :"light-theme"
        }
       setShow(!show)
       dispatch(changeTheme(themeData))
    }

    function setDarkTheme(){
        const themeData= {
            color :"dark-theme"
        }
      setShow(!show)
      dispatch(changeTheme(themeData))
    }
  return (
    <div>
        {show ?
           <button className='theme-btn'
           onClick={setLightTheme}
           >
            Light
            </button>
           :
           <button className='theme-btn'
           onClick={setDarkTheme}
           >
            Dark
            </button>
}
    </div>
  )
}

export default Theme