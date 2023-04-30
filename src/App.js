import './App.css';
import styled, { keyframes } from 'styled-components';
import Header from './components/header/Header';
import DaysOfWeek from './components/daysofweek/DaysOfWeek';
import Footer from './components/footer/Footer';

const AppWrapper = styled.div`
  display: block;
  margin: auto;
  width: 100vw;
  height: 100%;

  border: 1px solid black;
`
// const AppHeader = styled.div`
//   background-color: #222;
//   height: 150px;
//   padding: 20px;
//   color: white;
// `
// const AppTitle = styled.h1`
//   font-size: 1.3em;
//   font-weight: 900;
// `
// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `
// const AppLogo = styled.img`
//   animation: ${rotate360} infinite 120s linear;
//   height: 80px;
//   &:hover {
//     animation: ${rotate360} infinite 1.5s linear;
//   }
// `
// const AppIntro = styled.p`
//   color: ${props => props.theme.dark};
//   font-size: large;
//   code {
//     font-size: 1.3rem;
//   }
// `
// const EmojiWrapper = styled.span.attrs({
//   role: 'img'
// })``

function App() {
  return (
    <AppWrapper>
      <Header />
      <DaysOfWeek />

      <Footer />
    </AppWrapper>
  );
}

export default App;
