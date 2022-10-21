import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import myImage from '../img/logo3.png';


const Container = styled.div`
    height: 200px;
    background-color: #FAF6F5;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;// rendre les 
    justify-content: space-between;
    align-items: center;

`
const Left = styled.div`
flex:1;align-items: center;
display: flex;

`
const Center = styled.div`
flex:1;   
align-items: center;
display: flex;

`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language=styled.span`
    font-size:14px;
    cursor: pointer;
`
const SearchContainer=styled.div`
border: 0.25px solid lightgray;
display: flex;
align-items: center;
padding: 5px;
margin-left: 25px;

`
const Input=styled.input`border:none;border-radius:25px;background-color:#b8dfd9;`
const Logo=styled.img`
max-height:250px;
 cursor: pointer;
`;
const menuItem=styled.div`
font-size: 14px;
cursor: pointer;
`
const Quote =styled.h3`
padding-top:50px ;
font-family: 'Bad Script', cursive;
color:#9e2440;
opacity: 70%;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Logo src={myImage}/>
                <Quote> Lorem ipsum dolor sit amet consectetur   </Quote>
            </Left>
            <Center></Center>
            <Right>
            <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search></Search>
                </SearchContainer>
            </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar