import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    

    //const {username, email, password} = formState;
    

  return (
    <>
        <h1>Formulario Con Custom Hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="text"
            className="form-control mt-2"
            placeholder="maren@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">BORRAR</button>

    </>
  )
}
