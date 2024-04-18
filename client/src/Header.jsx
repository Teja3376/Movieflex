
import { Link } from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {


  return (
    
    <div style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center' , fontSize: '25px'}}>


         {/* USER BAR  LEFT*/}
        <Link to='/login'><PersonIcon style={{  color:'white',display:'flex' , alignItems:'center',marginLeft: '10px', fontSize: '25px'}}/></Link> 
          
        {/* LOGO PANEL  CENTER*/}
        <Link to='/' style={{fontFamily:'Bebas Neue', fontSize:'50px', color:'red'}}>MOVIEFLEX</Link>

        {/* SEARCH BAR RIGHT */}
          <Link to='/search'>
          <SearchIcon style={{color:'white', display:'flex' , alignItems:'center',marginRight: '10px', fontSize: '25px' }}/>
            </Link>
    </div>
  )
}

export default Header