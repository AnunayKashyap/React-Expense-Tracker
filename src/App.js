import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:Lexend;
  margin:15px 20px;
  padding:20px;
  border-radius:10px;
  
  
  
`;

const Header = styled.span`
  color:black;
  font-size:25px;
  font-weight:bold;
  

`

function App() {
  return (
    <Container>
      <Header>
        Expense Tracker
      </Header>

      <HomeComponent />
    </Container>
  );
}

export default App;
