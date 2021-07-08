import "../Container/Container.css"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import ProfileHeader from '../ProfileHeader/ProfileHeader';


function Container({isLoggedIn}) {

    console.log(isLoggedIn)


  return (
    <div className="container">
      {isLoggedIn ? <ProfileHeader/> : <Header/>}
      <Main/>
      <Footer/>
    </div>
  )
}

export default Container;
