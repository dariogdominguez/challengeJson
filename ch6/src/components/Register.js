import React from "react";
import { setUser } from "./services/UserServices"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BodyWrapper, ContentWrapper } from "../styles/bodyStyles"


export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const goToLoginPage = () => navigate("/Login");

    return (
        <BodyWrapper>
        <ContentWrapper>
            <h1>Register to the blog app</h1>
            <form onSubmit={e => {
                e.preventDefault()
                let newUser ={
                    id : Date.now(),
                    name,
                    email,
                    password
                }
                setUser(newUser);
                goToLoginPage();
                }}>
                <fieldset>
                    <legend>Register:</legend>
                    <label htmlFor="Name" >Name: </label>
                    <input type="text" id="Name" name="Name" placeholder="first name" onChange ={ e => setName(e.target.value)}/><br></br>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="e-mail" onChange ={ e => setEmail(e.target.value)}/><br></br>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" placeholder="pasword" onChange ={ e => setPassword(e.target.value)}/><br></br>
                    <input type="submit" value="Submit"/>
                </fieldset>
            </form>
            </ContentWrapper>
        </BodyWrapper>
    )
}
