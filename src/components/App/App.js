import styled from 'styled-components/macro';
import GlobalStyle from '../../styles/globalStyles';
import Header from '../Haeder/Header';
import GlobalFonts from '../../vendor/fonts/fonts';
import SearchForm from '../SearchForm/SearchForm';
function App() {
  return (
    <Wrapper>
      <Header />
      <SearchForm />
      <GlobalStyle />
      <GlobalFonts />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1320px;
  padding: 30px 20px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
