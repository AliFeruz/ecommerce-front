import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
    background-color: #222;

`;

const Logo = styled(Link)`
    color: white;
    text-decoration:none;
    font-size: 24px;
    font-weight: bold; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
    
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`;

const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
    font-size: 20px;

`

export default function Header(){
    return (
        <StyledHeader>
            <Center>
            <Logo href={'/'}>
            FakeShop
            </Logo>
            <StyledNav>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>All products</NavLink>
                <NavLink href={'/categories'}>Categories</NavLink>
                <NavLink href={'/account'}>Account</NavLink>
                <NavLink href={'/cart  '}>Cart (0)</NavLink>
            </StyledNav>
            </Center>     
        </StyledHeader>
    )
}