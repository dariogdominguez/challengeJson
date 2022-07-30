import React from "react";
import { useUserContext } from "../context/UserContext";


import { NavbarContainer, LeftContainer,
    NavbarInnerContainer,
    LinksContainer, StyNavLink, RightContainer} from "../styles/Navbar.Styles";

    function Navbar() {
        const { logedUser, setLogedUser } = useUserContext()
        console.log(useUserContext());

return (
        <NavbarContainer >
                <NavbarInnerContainer >
                <LeftContainer >
                        <LinksContainer >
                                <StyNavLink  to="/">Home</StyNavLink>
                                <StyNavLink  to="/Login">Login</StyNavLink>
                                <StyNavLink  to="/Register">Register</StyNavLink>
                        </LinksContainer>
                </LeftContainer> 
                <RightContainer>
                        {logedUser?<h2 color="white">{"Bienvenido "+" "+ logedUser.name}</h2>:<h2 >Login</h2>}
                </RightContainer>
                </NavbarInnerContainer>
        </NavbarContainer>

);
}

export default Navbar;
