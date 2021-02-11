import styled from 'styled-components/macro';
import GlobalStyle from '../../styles/globalStyles';
import GlobalFonts from '../../vendor/fonts/fonts';
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <GlobalFonts />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1320px;
  padding: 30px 0;
  margin: 0 auto;
`;
