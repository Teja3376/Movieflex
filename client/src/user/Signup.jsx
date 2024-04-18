import {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faAt,faUserLock } from '@fortawesome/free-solid-svg-icons'
const Signup = () => {

    const [name , setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate() 

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/person',{name,email,password})
        .then(result => {console.log(result)
            toast.success('Registered successfully')
        navigate('/login')
        }
    )
        .catch(err => {console.log(err) 
        toast.error('Failed to register')
        })
    }
  return (
    <div className="body">
        <div className='mainbox'>
        <form onSubmit={handleSubmit}>



            <div className='head'>
            <h1>Sign Up</h1>
            </div>



           <div className='dataBox'>
                 <div className='dataInput'>
                     <div className='mini b1'> 
                        {/* Username */}
                        <p>
                        <FontAwesomeIcon icon={faUser} />
                        </p>
                        <input type="text" 
                        placeholder="Username" 
                        name="name" 
                        required 
                        onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
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
                        <input type="submit" value="Sign Up" />
                 </div>
           </div>



        </form>
       <div style={{display : "flex", alignItems : "center", gap : "10px"}}> 
       <p>Dont have account?</p><Link to="/login">login</Link>
       </div>
    </div>
    </div>
  )
}
export default Signup
