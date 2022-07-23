import styled from 'styled-components';

export const StyButton = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
text-decoration: none;
height: 50px;
:hover {
    background-color: #707070;
    color: black;
}
`
export const StyButtonTwo = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
text-decoration: none;
height: 50px;
align-self: right;
:hover {
    background-color: #707070;
    color: black;
}
`

export const ButtonContainer =styled.div`
grid-area: 1 / 1 / 2 / 4;
display: flex;
flex-direction: row-reverse;
height: 80px;
width: 100%;
`
export const CardContainer =styled.div`
grid-area: 2 / 1 / 5 / 4;
margin-top: -80px;
`
export const Container =styled.div`
flex: 100%;
display: flex;
align-items: right;
padding-left: 5%;
`
export const CardWrapper = styled.div`
display: grid;
grid-template-columns: 350px;
grid-template-rows: 250px 150px 30px;
grid-template-areas: "image" "text" "stats";
border-radius: 18px;
background-color: rgb(255, 255, 255, 0.3);
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
text-align: center;
width: fit-content;
margin-left: 10px;
:hover {
transform: scale(1.1); 
}
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${props => props.src };);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  display: flex;
margin-left: 10px;
margin-top: 20px;
`;

export const TripName = styled.h3`
  margin-top: 0px;
  font-size: 1.5rem;
  box-sizing: border-box;
  height: 30px;
  min-width: 0px;
  line-height: 1;
  padding: 0%;
  margin: 0px;
  color: black;
`;

export const MainWrapper = styled.div`
height: 95vh;
width: 95vw;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
padding-bottom: 20px;
padding-left: 30px;
`;

export const WrapperTwo = styled.div`
grid-area: 1 / 1 / 2 / 4;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
`;
export const StyledImg = styled.img`
height: 95%;
width: 97%;
`;

export const CardTextBody = styled.p`
  color: black;
  font-size: 15px;
  text-decoration: solid;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
`;
export const CardTextWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`;

export const PriceContainer =styled.div`
display: flex;
flex-direction: row-reverse;
height: 30px;
width: 90%;
margin-right: 50px;
`

export const BottomContainer =styled.div`
grid-area: 3 / 1 / 3 / 4;
border-top: solid black 1px;
width: 100%;
height: 100px;
margin-top: -300px;
`