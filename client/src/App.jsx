
import Signup from './user/Signup'
import Login from './user/Login'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Home from './pages/home/Home';
import Nav from './components/header/Nav';
import MovieList from './components/MovieList/MovieList';
import Movie from './pages/movieDetail/Movie';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Nav/>
      <ToastContainer></ToastContainer>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>4
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
