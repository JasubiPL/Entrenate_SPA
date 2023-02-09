import '../styles/Index.css'
import Button from '../components/Button'
import logo from '../image/react.svg'
import { Link } from 'react-router-dom'

export default function Index(){
  return(
    <section className='index'>
      <div className='index__container--center'>
        <img className='index__logo' src={logo} />
        <h1 className='index__tittle'>Programa de regulacion metabolica</h1>
        <Link to='/login'>
          <Button text='Entrar' gender={true} click={() => console.log("click")}/>
        </Link >
      </div>
    </section>
  )
}