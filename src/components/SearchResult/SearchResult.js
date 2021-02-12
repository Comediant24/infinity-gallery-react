import React from 'react';
import styled from 'styled-components/macro';
import cards from '../../data/cards.json';
import Card from '../Card/Card';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './SearchResult.css';
const SearchResult = () => {
  return (
    <Wrapper>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}>
        <Masonry gutter="25px">
          {cards.results.map((card) => (
            <Card
              description={card.description}
              key={card.id}
              image={card.urls.small}
              likes={card.likes}
              user={card.user.first_name}
              userImage={card.user.profile_image.small}
              userLink={card.user.links.html}
            ></Card>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Wrapper>
  );
};

export default SearchResult;

const Wrapper = styled.section``;
