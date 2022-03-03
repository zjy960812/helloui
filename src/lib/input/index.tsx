import { InputHTMLAttributes } from "react"
import './index.css'
import './input.scss'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
const Input: React.FunctionComponent<InputProps> = (props) => {
  return <input className={`ele-input input`} {...props}/>
}
export default Input