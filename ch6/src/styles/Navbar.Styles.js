import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import React from "react";

export const Input = styled.input`
color: palevioletred;
cursor: pointer;
border-radius: 15px;
font-size: 1.5em;
border: 1px solid black;
margin-top: 15px;
margin-left: 15px;
padding:10px;
@media (max-width: 700px){
    display: none;
}
`;

export const InputThree = styled.input`
color: palevioletred;
cursor: pointer;
border-radius: 15px;
font-size: 1.5em;
height: 50px;
width: 50px;
border: 1px solid black;
margin-left: 5px;
padding:5px;
`;

export const InputExtended = styled.input`
color: palevioletred;
font-size: 1em;
border: 1px solid black;
border-radius: 3px;
float: right;
`;

export const StyButton = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "black"};


font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
text-decoration: none;
:hover {
    background-color: #707070;
    color: black;
}
@media (max-width: 850px){
    display: none;
}
`
export const StyButtonExtended = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "black"};
cursor: pointer;

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
text-decoration: none;
:hover {
    background-color: #707070;
    color: black;
}
@media (min-width: 700px){
    display: none;
}
`

export  const NavbarContainer = styled.nav`
    width: 96vw;
    height: ${(props)=>(props.extendedNavbar ? "100vh" : "80px")};
    background-image: url("https://images6.alphacoders.com/428/428228.jpg");
    display: flex;
    flex-direction: column;
    @media (min-width: 700px){
    height: 80px;
    border-radius: 15px;
    margin-bottom: 5px;
    border: solid;

}
`
export const LeftContainer =styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;
`

export const RightContainer =styled.div`
flex: 30%;
display: flex;
align-items: center;
padding-left: 5%;
background-image: url("https://images6.alphacoders.com/428/428228.jpg");
border-radius: 15px;
color: white;
text-transform: capitalize
`
export const NavbarInnerContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
`
export const LinksContainer = styled.div`
display: flex;
`
export const StyNavLink = styled(NavLink)`
color: white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
border-radius: 15px;
margin: 10px;
padding: 10px;
:hover {
    background-color: rgb(255, 187, 153, 0.5);
    color: black;
}
@media (max-width: 700px){
    display: none;
}
`
export const StyNavLinkExtended = styled(NavLink)`
color: white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
padding: 10px;
:hover {
    background-color: #707070;
    color: black;
}
`
export const OpenlinksButton = styled.button`
width: 50px;
height: 30px;
cursor: pointer;

background: none;
border: none;
color: white;
font-size: 45px;
cursor: pointer;
@media (min-width: 700px){
    display: none;
}
`

export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px){
    display: none;
}
`
export const SttyH4 = styled.h4`
color: white;
font-family: 'Courier New', Courier, monospace;
`

const Input2 = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  font-size: ${props => {
    if (props.size === "xs") return "6px";
    if (props.size === "sm") return "8px";
    if (props.size === "lg") return "12px";

    return "10px";
  }};
  width: 6em;
  height: 3.4em;

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.4em;

  &::before {
    position: absolute;
    content: "";
    height: 2.6em;
    width: 2.6em;
    left: 0.4em;
    bottom: 0.4em;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${Input2}:checked + & {
    background-color: #4caf50;
  }

  ${Input2}:checked + &::before {
    -webkit-transform: translateX(2.6em);
    -ms-transform: translateX(2.6em);
    transform: translateX(2.6em);
  }

  ${Input2}:focus + & {
    box-shadow: 0 0 0.1em #2196f3;
  }

  ${Input2}:disabled + & {
    pointer-events: none;
    background: #e6e6e6;
  }
`;

export default function ToggleSwitch({
  value,
  checked,
  onChange,
  name,
  id,
  disabled,
  title,
  size
}) {
  return (
    <Label htmlFor={id} disabled={disabled} title={title} size={size}>
      <Input2
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Slider />
    </Label>
  );
}