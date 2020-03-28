import { createGlobalStyle } from "styled-components";
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body{
    background:#333;
    height:100vh;
    
}

h1,h2{
color:white;
}

select{
    height:2rem;
    font-size:1.3rem;
    margin:2rem 0;
}
option{
    font-size:1.3rem;
}
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <h1>Totals: </h1>
      <Stats url="https://covid19.mathdro.id/api" />
      <CountrySelector />
    </div>
  );
}
