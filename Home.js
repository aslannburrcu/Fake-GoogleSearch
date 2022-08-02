import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const LogoSection = styled.div``;
const SearchSection = styled.div``;
const Form = styled.div``;
const Search = styled.div``;
const searchIcon = styled.div``;


const Home = () => {
  console.log('burcuburcuburucb')
  return (
    <Container>
      <LogoSection> 
        <img
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                 alt='google-logo'
        
        />
      </LogoSection>
      <SearchSection>
        <Form action="/" method="GET" role="search">
          <Search>
            <searchIcon>
            <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'

            >
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 
              5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 
              4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 
              11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
            </svg>
            </searchIcon>
          </Search>

          </Form>
      </SearchSection>
    </Container>
  );
};

export default Home;