import { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useForm } from 'react-hook-form'


export default function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext)
  const { handleSubmit, register, formState: { errors } }= useForm()

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(() => setShowProfile(true))}>
        <input 
          {...register('username', { required: true })}
          type="text"
          autoComplete="off"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {/* {errors.username && <span style={{color: 'red'}}>Usernmae is required!</span>} */}
        <input type="password" 
          placeholder="Password" 
        />
        <button 
          onSubmit={handleSubmit}
        > Login </button>
      </form>
    </>
  )

}