import {useState} from 'react'
import axios from 'axios'
import { Link,  } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt,faUserLock } from '@fortawesome/free-solid-svg-icons'
const Signup = () => {

    const [email, setEmail] = useState()
    let navigate = useNavigate()
    const [password, setPassword] = useState()
    const loginHandler =()=>{
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{name,email,password})
        .then(result => {console.log(result)
            if(result.data === 'success'){
                toast.success('Login successful')
                navigate('/')/*    ADD THE HOME link IN the URL */
            }
        }
    )
        .catch(err => {console.log(err)
            toast.error('Failed to register')
        })
    }
  return (
    <div className="body">
        <div className='mainBox'>
        <form onSubmit={handleSubmit}>
            <div className='Head'>
                <h1>Login</h1>
            </div>
            <div className='dataBox'>
                 <div className='dataInput'>
                     <div className='mini b2'>
                        {/* Email */}
                        <p>
                        <FontAwesomeIcon icon={faAt} />
                        </p>
                        <input type="email" 
                        placeholder="Email" 
                        name="email" 
                        required 
                        onChange={(e)=> setEmail(e.target.value)}/>
                     </div>
                     <div className='mini b3'>
                        {/* Password */}
                        <p>
                        <FontAwesomeIcon icon={faUserLock} />
                        </p>
                        <input type="password" 
                        placeholder="Password" 
                        name="password" 
                        required 
                        onChange={(e)=> setPassword(e.target.value)}/>
                     </div>
                </div>
                 <div className='submitbutton'>
                        <input type="submit" value="Login" onClick={(loginHandler)} />
                 </div>
                 </div>
        </form>
        <div style={{display : "flex", alignItems : "center", gap : "10px"}}> 
       <p>Already have account?</p><Link to="/signup">Signup</Link>
       </div>
    </div>
    </div>
  )
}
export default Signup
