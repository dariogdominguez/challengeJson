import styled from 'styled-components';

export const BodyWrapper =styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
padding-left: 5%;
border-radius: 15px;
border: 1px solid black;
height: 500px;
width: 95%;
padding: 20px;
text-align: center;
background-image:  url("https://thumbs.dreamstime.com/b/%E6%9C%A8%E8%83%8C%E6%99%AF%E6%B5%85%E8%A4%90%E8%89%B2%E6%9C%A8%EF%BC%8C%E6%A0%B7%E5%BC%8F%E5%A2%99%E7%BA%B8-%E6%9C%A8%E8%83%8C%E6%99%AF%E5%85%89%E5%92%8C%E6%A3%95%E8%89%B2%E6%9C%A8%E7%BA%B9%E7%90%86%E6%9D%BF%E6%9D%A1%EF%BC%8C%E6%A0%B7%E5%BC%8F%E5%A2%99%E7%BA%B8-145140531.jpg");
`

export const ContentWrapper =styled.div`
grid-area: 1 / 2 / 7 / 4;
padding-left: 5%;
border-radius: 15px;
border: 1px solid black;
height: 80%;
padding: 10px;
`