import styled from 'styled-components';
import {Link} from 'react-router-dom';

// import images
import misty from '../assets/misty.png';

// styled components
const StyledHeader = styled.div `
    font-family: 'Luckiest Guy', cursive;
    letter-spacing: 1.25px;
    text-shadow: 2px 2px red;
    margin-bottom: 30px;
    color: #3c5aa6;
`;

const Header = () => {
    return(
        <StyledHeader>
            <Link className= "navbar-brand" to="/">
                <img src={misty} alt="misty logo"/>
            </Link>
                <h1 className="display-1">Misty's Pokédex</h1>
            <hr/>
        </StyledHeader>
    );
}
export default Header;