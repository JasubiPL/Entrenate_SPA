import '../styles/Login.css'
import {FaKeycdn} from 'react-icons/fa'
import Button from '../components/Button';

export default function Login(){

  function checkForm(){
    let inputEmail = document.getElementById("login__input-email").value;
    let inputPassword = document.getElementById("login__input-password").value;
    let errorMessage = document.getElementById("login__error-message");
    
    if(inputEmail == "" || inputPassword == ""){
      alert("Rellene los 2 campos")
    }else{

      errorMessage.innerHTML ='Usuario  y contraseña incorrectos <br /><a>Mas Informacion</a>';
      alert("holi")
    }
  }

  return(
    <section className='login' >
      <div className='login__container--center' >
        <header className='login__header'>
          <FaKeycdn />
          <h1>Iniciar Sesion</h1>
        </header>
        <form className='login__form'>
          <input id='login__input-email' type="text" placeholder='Correo' />
          <input id='login__input-password' type="password" placeholder='Contraseña' />
          <small id='login__error-message' className='login__error-message' ></small>
          <Button text='Iniciar Sesion' gender={true} click={() => checkForm()} />
        </form>
      </div>
    </section>
  )
}