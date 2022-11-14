import styled from 'styled-components';

// import images
import pokeball from '../assets/pokeball-yellow.png';

// styled components
const StyledFooter = styled.div `
    background-color: #FFCB05;
    font-family: 'Luckiest Guy', cursive;
    margin: 0px;
    width: 100%;
    letter-spacing: 1.25px;
    padding: 25px;
`;

const StyledImage = styled.img `
    height: 50px;
    `;

const Footer = () => {
    return(
        <StyledFooter>
            <hr/>
                <div>gotta catch 'em all!</div>
                <StyledImage src={pokeball} alt="pokeball"/>
            <hr/>
        </StyledFooter>
    );
}
export default Footer;