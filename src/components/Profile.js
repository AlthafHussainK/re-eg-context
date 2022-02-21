import { useContext } from "react"
import { LoginContext } from "../contexts/LoginContext"

export default function Profile() {
  const {username, setUsername, setShowProfile} = useContext(LoginContext)
  const logoutProfile = () => {
    setShowProfile(false)
    setUsername('')
  }
  return (
    <>
      <h1>🧑‍💻 Profile</h1>
      <h2>Welcome 🎉  {username} </h2>
      <button onClick={logoutProfile}> Logout</button>
    </>
  )
}