import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logoKinal.jpg";
import { useUserDetails } from "../../shared/hooks/useUserDetails.jsx";

const NavLogo = () => {
    return(
        <div className="nav-logo-container">
            <img className="nav-logo"
            width='100%'
            height='100%'
             src={Logo}
            alt="Kinal" />
        </div>
    )
}

const NavButton = ({text, onClickHandler}) =>{
    return(
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () =>{
    const {isLogged, logout} = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAuthPage = () =>{
        navigate('/auth')
    }
    const handleNavigateToSettingPage = () => {
        navigate('/settings')
    }
    const handleNavigateToChannelPage = () =>{
        navigate('/channels')
    }

    const handleLogout = () =>{
        logout()
    }

    return (
        <div className="nav-container">
            <NavLogo/>
            <div className="nav-buttons-container">
                <NavButton text='Browse' onClickHandler={handleNavigateToChannelPage}/>
                {!isLogged ? (
                    <NavButton text='Login' onClickHandler={handleNavigateToAuthPage}/>
                ) :(
                    <div>
                        <NavButton text='My account ' onClickHandler={handleNavigateToSettingPage}/>
                        <NavButton text='Logout' onClickHandler={handleLogout}/>
                    </div>
                )}
            </div>
        </div>
    )
}