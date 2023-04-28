import { useState } from "react"
import { Link } from "react-router-dom"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from "../config/firebase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
  
    const signOutOnClick = () => {
        signOut(auth)
        window.location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            window.location.reload();
        }
    }  
    const dropDown = () => {
        setIsVisible(!isVisible)
    }

  return ( 
    <nav className='navbar'>
        <h2 className='navtitle'>Home</h2>
        <div className="navbutton">
            <button
            onClick={dropDown}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
        { isVisible? (
        <div className='navlinks'>
            <Link className='navlink' to="/">Home
            </Link>
            <Link className='navlink' to="/about">About
            </Link>
            <Link className='navlink' to="/support">Support
            </Link>
            {
                !auth.currentUser ?
            <>
                <Link className='navlink' to="/" onClick={()=> {signInOnClick()}}>Sign In
                </Link>
            </>
            :
            <>
            <Link className='navlink' to="/dashboard">Dashboard
            </Link>
            <Link className='navlink' to="/profile">Profile
            </Link>
            <Link className='navlink' to="/" onClick={()=>{signOutOnClick()}}>Sign Out
            </Link>
            </>
            }
        </div>
         ) : 
         (<></>)}
    </nav>
     )
}

export default Navbar