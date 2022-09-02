import './styles/App.css'
import { useSelector } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {NavBar, BackToTopButton, Footer} from './Components'
import { Load, Home, ItemDetails, Categories, CategoryDetails, Search, SignUp, Login } from './Pages'

function App() {

  const isLoading = useSelector( state => state.isLoading );

  return (
    <div className="App">
      {isLoading && <Load/>}
      <HashRouter>
        <NavBar/>
        <BackToTopButton/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/item-details/:id' element={ <ItemDetails/> }/>
          <Route path='/categories' element={ <Categories/> }/>
          <Route path='/categories/:id' element={ <CategoryDetails/> }/>
          <Route path='/search/:slug' element={ <Search/> }/>
          <Route path='/sign-up' element={ <SignUp/> }/>
          <Route path='/login' element={ <Login/> }/>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
