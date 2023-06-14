import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../Reducers/userReducer'

const NavBar = () => {
    const {name} = useSelector(state=>state.userInfo.data)
    const dispatch = useDispatch()
  return (
    <div className="nav-container">
     <h3>{name}</h3>
     <button
     onClick={()=>dispatch(logoutUser())}
     >Log Out</button>
    </div>
  )
}

export default NavBar