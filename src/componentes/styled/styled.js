import Stiled from 'styled-components'

export const Titulo = Stiled.h2`
    font-family: san-serif;
    font-size: 5vw;
    color: #0f0;
    text-shadow: 8px 0px 7px #000
`;
export const Menu = Stiled.menu`
    border: solid 3px #000;
    padding: 0.1vw;
    margin: 0.2vw;
    width: 15vw;
    color: #fff;
    font-size: 2vw;
    &:hover{
        color: aqua;
        
      }
`;
