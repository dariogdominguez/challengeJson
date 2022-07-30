import React, { useContext } from "react";
import { useState } from "react";
import { GetUser } from "./services/UserServices";
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext";
import { BodyWrapper, ContentWrapper } from "../styles/bodyStyles"

export default function Login (){
    const { loguedUser, setLogedUser } = useUserContext();
    console.log(loguedUser)

    const navigate = useNavigate();
    const goToAllPostPage = () => navigate("/AllPost");
    const goToResgisterPage = () => navigate("/Register");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <BodyWrapper>
            <ContentWrapper>
            <h1>Login to the App</h1>
            <form onSubmit={async e => {
                e.preventDefault()
                let user ={
                    email,
                    password
                }
                const loged = GetUser(user)
                loged.then(e => setLogedUser(e[0]))
                loged.then( e => e?goToAllPostPage():goToResgisterPage());
                }}>
                <fieldset>
                    <legend>Login:</legend>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="e-mail" onChange ={ e => setEmail(e.target.value)}/><br></br>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" name="password" placeholder="password" onChange ={ e => setPassword(e.target.value)}/><br></br>
                    <input type="submit" value="Submit"/>
                </fieldset>
            </form>
            </ContentWrapper>
        </BodyWrapper>
    )
}
