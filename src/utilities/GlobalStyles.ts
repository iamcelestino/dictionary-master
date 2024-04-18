import { createGlobalStyle } from "styled-components";

interface IProps {
  font: string & any;
}

export const GlobalStyles = createGlobalStyle<IProps>`

body{
 background-color: ${(props) => props.theme.color.background};
color: ${(props) => props.theme.color.text};

 font-family: ${(props) =>
   props.font === "Sans Serif"
     ? props.theme.fontFamily.sans
     : props.font === "Serif"
     ? props.theme.fontFamily.serif
     : props.theme.fontFamily.mono};
}

label{
    border: none;
    border-color: ${(props) => props.theme.color.background};
  }

button{
    border: none;
    border-color: ${(props) => props.theme.color.background};
color: ${(props) => props.theme.color.text};
  font-family: ${(props) =>
    props.font === "Sans Serif"
      ? props.theme.fontFamily.sans
      : props.font === "Serif"
      ? props.theme.fontFamily.serif
      : props.theme.fontFamily.mono};
}

h1, h2, h3, h4 , h5 ,h6{
  margin: 0;
}

span, p, a{
  margin: 0;
}

ul, nav{
  margin: 0;
  padding: 0;
  list-style: none;
}

img{
    display: block;
}
`;
