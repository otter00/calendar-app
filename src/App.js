import './App.css';
import styled from 'styled-components';
import Header from './components/header/Header';
import DaysOfWeek from './components/daysofweek/DaysOfWeek';
import Footer from './components/footer/Footer';

const AppWrapper = styled.div`
  display: block;
  margin: auto;
  width: 740px;
  height: 100%;

  border: 1px solid black;
`

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
