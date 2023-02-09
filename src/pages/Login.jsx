import '../styles/Login.css'
import {FaKeycdn} from 'react-icons/fa'
import Button from '../components/Button';

export default function Login(){
  return(
    <section className='login-container' >
      <header className='login-container__header'>
        <FaKeycdn />
        <h1>Iniciar Sesión</h1>
      </header>
      <form className='login-container__input-container'>
        <input type="text" placeholder='Correo' />
        <input type="password" placeholder='contraseña' />
        <Button text='Entrar' click='' />
      </form>
    </section>
  )
}