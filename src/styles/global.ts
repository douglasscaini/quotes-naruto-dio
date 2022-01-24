import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/images/background.jpeg";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: #332c36;
    font-family: 'New Tegomin', serif;
    background: url(${backgroundImg}) center no-repeat;
    background-size: cover;
  }
`;
