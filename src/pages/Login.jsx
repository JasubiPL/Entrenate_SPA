import '../styles/Login.css'
import {FaKeycdn} from 'react-icons/fa'
import Button from '../components/Button';

export default function Login(){

  function validateForm(e){
    let inputEmail = document.getElementById("login__input-email").value;
    let inputPassword = document.getElementById("login__input-password").value;
    let errorMessage = document.getElementById("login__error-message");
    
    if(inputEmail == "" || inputPassword == ""){

      e.preventDefault();
      errorMessage.innerHTML ='Llena los 2 campo para poder continuar';
      
    }else{
      if(!inputEmail.includes('@' && '.')){
        e.preventDefault();
        errorMessage.innerHTML ='Introduce un correo electronico valido';
      }
    }
  }

  return(
    <section className='login' >
      <div className='login__container--center' >
        <header className='login__header'>
          <FaKeycdn />
          <h1>Iniciar Sesion</h1>
        </header>
        <form className='login__form' onSubmit={validateForm}>
          <input id='login__input-email' type="text" placeholder='Correo' />
          <input id='login__input-password' type="password" placeholder='Contraseña' />
          <small id='login__error-message' className='login__error-message' ></small>
          <Button text='Iniciar Sesion' gender={true} />
        </form>
      </div>
    </section>
  )
}