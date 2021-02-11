import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleLink href="/">home</TitleLink>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header``;
const TitleLink = styled.a`
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  text-decoration: none;
  color: #000000;
`;
