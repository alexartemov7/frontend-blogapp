import { useContext } from "react"

import { UserContext } from "../App"

export default function Nav() {
  const {userState, setUserState} = useContext(UserContext)

    return (

      <header>
        <ul>
          <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
          <li><a href="/new-post" target="_blank" rel="noopener noreferrer">Add Post</a></li>
          <li><a href="/login" target="_blank" rel="noopener noreferrer">Login</a></li>
          <li><a href="/signup" target="_blank" rel="noopener noreferrer">Sign up</a></li>
          <li style={{color: 'white'}}>{userState.email}</li>

        </ul>
      </header>
    )
  }