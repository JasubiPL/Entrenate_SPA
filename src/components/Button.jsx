import '../styles/Button.css'

export default function Button({text, click, gender}){
  return(
    <button className={gender ? 'btn btn-male' : 'btn btn-female'} onClick={() => click()}>
      {text}
    </button>
  )
}