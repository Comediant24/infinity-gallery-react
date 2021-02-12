import React from 'react';
import styled from 'styled-components/macro';
import Like from '../../images/like.svg';

const Card = ({ image, description, likes, user, userImage, userLink }) => {
  return (
    <Wrapper>
      <ImgCard alt={description} src={image}></ImgCard>
      <DescriptionCard>
        <InfoCardContainer>
          <ImgCardContainer alt="like count" src={Like} />
          <TextCardContainer>{likes}</TextCardContainer>
        </InfoCardContainer>
        <RightInfoCardContainer>
          <UserImgCardContainer alt="user avatar" src={userImage} />
          <LinkCardContainer target="_blank" href={userLink}>
            {user}
          </LinkCardContainer>
        </RightInfoCardContainer>
      </DescriptionCard>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImgCard = styled.img`
  width: 100%;
`;

const DescriptionCard = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  padding: 20px 16px;

  @media screen and (max-width: 400px) {
    padding: 12px 10px;
  }
`;

const InfoCardContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const RightInfoCardContainer = styled(InfoCardContainer)`
  flex-direction: row-reverse;
`;

const ImgCardContainer = styled.img`
  width: 32px;
  height: 32px;
`;

const UserImgCardContainer = styled(ImgCardContainer)`
  border-radius: 100%;
`;

const TextCardContainer = styled.p`
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

const LinkCardContainer = styled.a`
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  text-decoration: none;
  text-align: end;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 130px;

  @media screen and (max-width: 1000px) {
    max-width: 200px;
  }

  @media screen and (max-width: 400px) {
    font-size: 16px;
    max-width: 180px;
  }
`;
