import styled from 'styled-components/macro';
import Card from '../Card/Card';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import InfiniteScroll from 'react-infinite-scroll-component';

import './SearchResult.css';
const SearchResult = ({ imagesCards = [], setPage }) => {
  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={imagesCards.length}
        next={() => setPage()}
        hasMore={true}
        loader={
          imagesCards.length === 30 ? (
            ''
          ) : (
            <LoaderText>loading image...</LoaderText>
          )
        }
      >
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}
        >
          <Masonry gutter="25px">
            {imagesCards.map((card) => (
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
      </InfiniteScroll>
    </Wrapper>
  );
};

export default SearchResult;

const Wrapper = styled.section``;

const LoaderText = styled.p`
  font-size: 30px;
  text-align: center;
`;
